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








