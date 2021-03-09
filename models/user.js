const mongoose = require('mongoose')

var studentSchema = mongoose.Schema({
    studentGender: String,
    studentFirstName: String,
    studentLastName: String,
    studentGrade: String,
    studentEmail: String,
    studentAddress: String,
    studentAddressComp: String,
    studentZip: Number,
    studentCity: String,
    studentBirthday: Date,
    studentSchool: String
});

var userSchema = mongoose.Schema({
    userGender: String,
    userFirstName: String,
    userLastName: String,
    userEmail: String,
    userPassword: String,
    token: String,
    salt: String,
    student:[studentSchema]

});


const userModel = mongoose.model('users', userSchema)

module.exports = userModel