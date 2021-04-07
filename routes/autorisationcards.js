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




/* ROUTE POUR LA CRÉATION D'UNE CARTE PARTENAIRE ET D'AUTORISATION */
router.post('/autocardcreation', async function (req, res, next) {

    var error = []
    var success = []
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



/* RECUPERER LES DONNÉES DES AUTORISATION CARDS */
router.get('/loadingautorisationcards', async function (req, res, next) {

    let data = await autorisationCardModel.find()
    res.json(data)
})








module.exports = router;