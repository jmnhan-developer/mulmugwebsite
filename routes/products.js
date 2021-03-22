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







// /* RECUPERER LES DONNEES DE PRODUITS ABONDEMENT */
// router.get('/loadingabonddata', async function (req, res, next) {

//     let products = await productModel.find({category:Abondement})
//       res.json({ products });
    
//   });