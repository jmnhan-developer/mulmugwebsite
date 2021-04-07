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
        error.push('La catégorie, le nom commercial, le prix HT, la TVA ainsi que le prix TTC sont des champs obligatoires. Veuillez svp les renseigner.')
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





module.exports = router;