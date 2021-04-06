const express = require('express');
const router = express.Router();
const uid2 = require("uid2");
const SHA256 = require('crypto-js/sha256');
const encBase64 = require('crypto-js/enc-base64');
var mongoose = require('mongoose');
const userModel = require('../models/user');
const productModel = require('../models/product')
const adminModel = require('../models/admin')
const superAdminModel = require('../models/superadmin')
const autorisationModel = require('../models/autorisation')
const autorisationCardModel = require ('../models/autorisationCard')


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;


/* ROUTE USER SIGN UP */
router.post('/usersignup', async function (req, res, next) {

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



/* ROUTE USER SIGN IN */
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

  res.json({ result, user, error, token })


});



/* ROUTE POUR LA CRÉATION D'ADMIN */
router.post('/admincreation', async function (req, res, next) {

  var error = []
  var result = false
  var saveAdmin = null
  var token = null

  const data = await adminModel.findOne({
    adminEmail: req.body.adminEmailFromFront
  })

  if (data != null) {
    error.push('Votre adresse e-mail est déjà associée à un compte utilisateur. Veuillez vous connecter avec cette adresse e-mail et son mot de passe.')
  }

  if (req.body.adminFirstNameFromFront == ''
    || req.body.adminLastNameFromFront == ''
    || req.body.adminPositionFromFront == ''
    || req.body.adminEmailFromFront == ''
    || req.body.adminPasswordFromFront == ''
    || req.body.adminRoleFromFront == ''
  ) {
    error.push('Un ou des champs obligatoires sont vides. Veuillez svp les renseigner.')
  }

  if (error.length === 0) {

    var salt = uid2(32)
    var admin = new adminModel({
      adminFirstName: req.body.adminFirstNameFromFront,
      adminLastName: req.body.adminLastNameFromFront,
      adminPosition: req.body.adminPositionFromFront,
      adminEmail: req.body.adminEmailFromFront,
      adminPassword: SHA256(req.body.adminPasswordFromFront + salt).toString(encBase64),
      adminRole: req.body.adminRoleFromFront,
      token: uid2(32),
      salt: salt

    })

    saveAdmin = await admin.save()

    if (saveAdmin) {
      result = true
      token = saveAdmin.token
    }
  }
  res.json({ result, saveAdmin, error, token })
})



/* ROUTE SIGN IN ADMIN */
router.post('/adminsignin', async function (req, res, next) {
  var result = false
  var admin = null
  var error = []
  var token = null

  if (req.body.adminEmailFromFront == ''
    || req.body.adminPasswordFromFront == ''
  ) {
    error.push('Un ou des champs obligatoires sont vides. Veuillez svp les renseigner.')
  }

  if (error.length == 0) {
    const admin = await adminModel.findOne({
      adminEmail: req.body.adminEmailFromFront,
    })

    if (admin != null) {
      const passwordEncrypt = SHA256(req.body.adminPasswordFromFront + admin.salt).toString(encBase64)

      if (passwordEncrypt == admin.adminPassword) {
        result = true
        token = admin.token
      } else {
        result = false
        error.push('Incorrect Password ')
      }

    } else {
      error.push('Incorrect Email')
    }
  }

  res.json({ result, admin, error, token })

})



/* ROUTE POUR LA CRÉATION DE SUPER ADMIN */
router.post('/superadmincreation', async function (req, res, next) {

  var error = []
  var result = false
  var saveSuperAdmin = null
  var token = null

  const data = await superAdminModel.findOne({
    superAdminEmail: req.body.superAdminEmailFromFront
  })

  if (data != null) {
    error.push('Votre adresse e-mail est déjà associée à un compte utilisateur. Veuillez vous connecter avec cette adresse e-mail et son mot de passe.')
  }

  if (req.body.superAdminFirstNameFromFront == ''
    || req.body.superAdminLastNameFromFront == ''
    || req.body.superAdminPositionFromFront == ''
    || req.body.superAdminEmailFromFront == ''
    || req.body.superAdminPasswordFromFront == ''
    || req.body.superAdminRoleFromFront == ''
  ) {
    error.push('Un ou des champs obligatoires sont vides. Veuillez svp les renseigner.')
  }

  if (error.length === 0) {

    var salt = uid2(32)
    var superAdmin = new superAdminModel({
      superAdminFirstName: req.body.superAdminFirstNameFromFront,
      superAdminLastName: req.body.superAdminLastNameFromFront,
      superAdminPosition: req.body.superAdminPositionFromFront,
      superAdminEmail: req.body.superAdminEmailFromFront,
      superAdminPassword: SHA256(req.body.superAdminPasswordFromFront + salt).toString(encBase64),
      superAdminRole: req.body.superAdminRoleFromFront,
      token: uid2(32),
      salt: salt

    })

    saveSuperAdmin = await superAdmin.save()

    if (saveSuperAdmin) {
      result = true
      token = saveSuperAdmin.token
    }
  }
  res.json({ result, saveSuperAdmin, error, token })
})



/* ROUTE SIGN IN SUPER ADMIN */
router.post('/superadminsignin', async function (req, res, next) {
  var result = false
  var superAdmin = null
  var error = []
  var token = null

  if (req.body.superAdminEmailFromFront == ''
    || req.body.superAdminPasswordFromFront == ''
  ) {
    error.push('Un ou des champs obligatoires sont vides. Veuillez svp les renseigner.')
  }

  if (error.length == 0) {
    const superAdmin = await superAdminModel.findOne({
      superAdminEmail: req.body.superAdminEmailFromFront,
    })

    if (superAdmin != null) {
      const passwordEncrypt = SHA256(req.body.superAdminPasswordFromFront + superAdmin.salt).toString(encBase64)

      if (passwordEncrypt == superAdmin.superAdminPassword) {
        result = true
        token = superAdmin.token
      } else {
        result = false
        error.push('Incorrect Password ')
      }

    } else {
      error.push('Incorrect Email')
    }
  }

  res.json({ result, superAdmin, error, token })

})



/* ROUTE POUR LA CRÉATION D'UN PRODUIT OU UNE OFFRE */
router.post('/productcreation', async function (req, res, next) {

  var error = []
  var success = []
  var result = false
  var saveProduct = null

  if (req.body.categoryFromFront == ''
    || req.body.commercialNameFromFront == ''
    || req.body.priceHTFromFront == ''
    || req.body.rateTVAFromFront == ''
    || req.body.priceTTCFromFront == ''
  ) {
    error.push('La catégorie, le nom commercial, la prix HT, la TVA ainsi que le prix TTC sont des champs obligatoires. Veuillez svp les renseigner.')
  }

  if (error.length === 0) {

    var product = new productModel({

      category: req.body.categoryFromFront,
      commercialName: req.body.commercialNameFromFront,
      commitment: req.body.commitmentFromFront,
      nbrPoints: req.body.nbrPointsFromFront,
      period: req.body.periodFromFront,
      discipline: req.body.disciplineFromFront,
      grade: req.body.gradeFromFront,
      priceHT: req.body.priceHTFromFront,
      rateTVA: req.body.rateTVAFromFront,
      priceTTC: req.body.priceTTCFromFront,
      durationDays: req.body.durationDaysFromFront,
      beginingDate: req.body.beginingDateFromFront,
      endDate: req.body.endDateFromFront

    })

    saveProduct = await product.save()

    if (saveProduct) {
      result = true
      success.push('Un nouveau produit a bien été créé !')
    }
  }
  res.json({ result, saveProduct, error, success })
})



/* ROUTE POUR LA CRÉATION D'UNE CARTE PARTENAIRE ET D'AUTORISATION */
router.post('/autocardcreation', async function (req, res, next) {

  var error = []
  var success =[]
  var result = false
  var saveCard = null

  if (req.body.categoryFromFront == ''
    || req.body.brandPartner1FromFront == ''
    || req.body.brandPartner2FromFront == ''
    || req.body.brandPartner3FromFront == ''

  ) {
    error.push('La catégorie et les 3 premières marques partenaires sont des champs obligatoires. Veuillez svp les renseigner.')
  }

  if (error.length === 0) {

    var autorisationCard = new autorisationCardModel({

      category: req.body.categoryFromFront,
      brandPartner1: req.body.brandPartner1FromFront,
      brandPartner2: req.body.brandPartner2FromFront,
      brandPartner3: req.body.brandPartner3FromFront,
      brandPartner4: req.body.brandPartner4FromFront,
      brandPartner5: req.body.brandPartner5FromFront,
      brandPartner6: req.body.brandPartner6FromFront,
      brandPartner7: req.body.brandPartner7FromFront,
      brandPartner8: req.body.brandPartner8FromFront,
      brandPartner9: req.body.brandPartner9FromFront,
      brandPartner10: req.body.brandPartner10FromFront,
      brandPartner11: req.body.brandPartner11FromFront,
      brandPartner12: req.body.brandPartner12FromFront,
    })

    saveCard = await autorisationCard.save()

    if (saveCard) {
      result = true
      success.push("Une carte d'autorisation a bien été créée !")
    }
  }
  res.json({ result, saveCard, error, success })
})



/* RECUPERER LES DONNEES DE PRODUITS ABONDEMENT */
router.get('/loadingabonddata', async function (req, res, next) {

  let products = await productModel.find({ category: 'Abondement en points' })
  res.json({ products });
});



/* RECUPERER LES DONNEES DE PRODUITS FORFAIT SANS PUB */
router.get('/loadingforfaitdata', async function (req, res, next) {

  let products = await productModel.find({ category: 'Forfait sans Pub' })
  res.json({ products });
});



/* RECUPERER LES DONNEES DE PRODUITS CAHIERS DE VACANCES */
router.get('/loadingcahierdata', async function (req, res, next) {

  let products = await productModel.find({ category: 'Cahier de Vacances' })
  res.json({ products });
});



/* RECUPERER LES DONNEES DE L'UTILISATEUR */
router.get('/loadinguserinfo', async function (req, res, next) {

  let data = await userModel.findOne({ token: req.query.token })
  res.json(data);

});



/* RECUPERER LES DONNEES DE L'ADMIN */
router.get('/loadingadmininfo', async function (req, res, next) {

  let data = await adminModel.findOne({ token: req.query.token })
  res.json(data);
});



/* RECUPERER LES DONNÉES DES AUTORISATION CARDS */
router.get ('/loadingautorisationcards', async function (req, res, next) {

  let data = await autorisationCardModel.find()
  console.log("*** data from backend***", data)
  res.json(data)
}) 