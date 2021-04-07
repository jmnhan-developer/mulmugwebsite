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
const autorisationCardModel = require('../models/autorisationCard')


/* ROUTE POUR LA CRÉATION D'ADMIN */
router.post('/admincreation', async function (req, res, next) {

    var error = []
    var success = []
    var result = false
    var saveAdmin = null
    var token = null

    const data = await adminModel.findOne({
        adminEmail: req.body.adminEmailFromFront
    })

    if (data != null) {
        error.push("L'adresse e-mail que tu as saisie est déjà associée à un compte administrateur Mulmug. Connectes-toi avec cette adresse e-mail et son mot de passe correspondant.")
    }

    if (req.body.adminFirstNameFromFront == ''
        || req.body.adminLastNameFromFront == ''
        || req.body.adminPositionFromFront == ''
        || req.body.adminEmailFromFront == ''
        || req.body.adminPasswordFromFront == ''
        || req.body.adminRoleFromFront == ''
    ) {
        error.push('Tous les champs sont obligatoires. Merci de tous les renseigner.')
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
            success.push ('Le compte Admin a bien été créé !')
        }
    }
    res.json({ result, saveAdmin, error, token, success })
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
        error.push('Tous les champs sont obligatoires. Merci de tous les renseigner.')
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
    var success = []
    var result = false
    var saveSuperAdmin = null
    var token = null

    const data = await superAdminModel.findOne({
        superAdminEmail: req.body.superAdminEmailFromFront
    })

    if (data != null) {
        error.push("L'adresse e-mail que tu as saisie est déjà associée à un compte super administrateur Mulmug. Connectes-toi avec cette adresse e-mail et son mot de passe correspondant.")
    }

    if (req.body.superAdminFirstNameFromFront == ''
        || req.body.superAdminLastNameFromFront == ''
        || req.body.superAdminPositionFromFront == ''
        || req.body.superAdminEmailFromFront == ''
        || req.body.superAdminPasswordFromFront == ''
        || req.body.superAdminRoleFromFront == ''
    ) {
        error.push('Tous les champs sont obligatoires. Merci de tous les renseigner.')
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
            success.push ('Le compte Super  Admin a bien été créé !')
        }
    }
    res.json({ result, saveSuperAdmin, error, token, success })
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
        error.push('Tous les champs sont obligatoires. Merci de tous les renseigner.')
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



/* RECUPERER LES DONNEES DE L'ADMIN */
router.get('/loadingadmininfo', async function (req, res, next) {

    let data = await adminModel.findOne({ token: req.query.token })
    res.json(data);
});



module.exports = router;