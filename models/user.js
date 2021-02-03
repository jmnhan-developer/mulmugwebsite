
const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    sex: String,
    firstName: String,
    lastName: String,
    grade:String,
    email: String,
    role: String,
    password: String,
    token: String,
    salt: String,
    
})

const userModel = mongoose.model('users', userSchema)

module.exports = userModel