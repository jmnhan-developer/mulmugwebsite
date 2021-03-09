const express = require('express');
const router = express.Router();
const uid2 = require("uid2");
const SHA256 = require('crypto-js/sha256');
const encBase64 = require('crypto-js/enc-base64');
var mongoose = require('mongoose');
const userModel = require('../models/user');
const productModel = require('../models/product')


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;


/* ROUTE SIGN UP */

router.post('/usersignup', async function (req, res, next) {

  console.log('PASSING', req.body);

  var error = []
  var result = false
  var saveUser = null
  var token = null

  const data = await userModel.findOne({
    userEmail: req.body.userEmailFromFront
  })

  if (data != null) {
    error.push('Votre adresse e-mail est déjà associée à un compte utilisateur. Veuillez vous connecter avec cette adresse e-mail et son mot de passe.')
  }

  if (req.body.userFirstNameFromFront == ''
    || req.body.userLastNameFromFront == ''
    || req.body.userEmailFromFront == ''
    || req.body.userPasswordFromFront == ''
    || req.body.userConfirmPasswordFromFront == ''

    || req.body.studentFirstNameFromFront == ''
    || req.body.studentLastNameFromFront == ''
    || req.body.studentGradeFromFront == ''
    || req.body.studentEmailFromFront == ''

  ) {
    error.push('Un ou des champs obligatoires sont vides. Veuillez svp les renseigner.')
  }

  if (error.length === 0) {

    console.log('NO ERROR');

    var salt = uid2(32)
    var user = new userModel({
      userGender: req.body.userGenderFromFront,
      userFirstName: req.body.userFirstNameFromFront,
      userLastName: req.body.userLastNameFromFront,
      userEmail: req.body.userEmailFromFront,
      userPassword: SHA256(req.body.userPasswordFromFront + salt).toString(encBase64),
      token: uid2(32),
      salt: salt

    })

    user.student.push({
      studentGender: req.body.studentGenderFromFront,
      studentFirstName: req.body.studentFirstNameFromFront,
      studentLastName: req.body.studentLastNameFromFront,
      studentGrade: req.body.studentGradeFromFront,
      studentEmail: req.body.studentEmailFromFront,
    })


    saveUser = await user.save()


    if (saveUser) {
      result = true
      token = saveUser.token
    }
  }
  res.json({ result, saveUser, error, token })
})



/* ROUTE SIGN IN */


router.post('/usersignin', async function (req, res, next) {
  var result = false
  var user = null
  var error = []
  var token = null

  if (req.body.userEmailFromFront == ''
    || req.body.userPasswordFromFront == ''
  ) {
    error.push('Un ou des champs obligatoires sont vides. Veuillez svp les renseigner.')
  }

  if (error.length == 0) {
    const user = await userModel.findOne({
      userEmail: req.body.userEmailFromFront,
    })

    console.log("log-user", user)

    if (user != null) {
      const passwordEncrypt = SHA256(req.body.userPasswordFromFront + user.salt).toString(encBase64)

      if (passwordEncrypt == user.userPassword) {
        result = true
        token = user.token
      } else {
        result = false
        error.push('Incorrect Password ')
      }

    } else {
      error.push('Incorrect Email')
    }
  }

  console.log("back", user, result)

  res.json({ result, user, error, token })


})
