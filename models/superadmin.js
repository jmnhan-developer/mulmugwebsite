const mongoose = require('mongoose')

var superAdminSchema = mongoose.Schema({
    superAdminFirstName: String,
    superAdminLastName: String,
    superAdminPosition: String,
    superAdminEmail: String,
    superAdminPassword: String,
    superAdminRole:String,
    token: String,
    salt: String,
});

const superAdminModel = mongoose.model('superadmin', superAdminSchema)

module.exports = superAdminModel