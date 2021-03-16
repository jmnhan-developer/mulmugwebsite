const mongoose = require('mongoose')

var adminSchema = mongoose.Schema({
    adminFirstName: String,
    adminLastName: String,
    adminPosition: String,
    adminEmail: String,
    adminPassword: String,
    adminRole:String,
    token: String,
    salt: String,
});

const adminModel = mongoose.model('admin', adminSchema)

module.exports = adminModel