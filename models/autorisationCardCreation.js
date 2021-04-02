const mongoose = require ('mongoose')

const autorisationCardSchema = mongoose.Schema ({

    departmentName: String,
    brandPartner1:String,
    brandPartner2:String,
    brandPartner3:String,
    brandPartner4:String,
    brandPartner5:String,
    brandPartner6:String,
    brandPartner7:String,
    brandPartner8:String,
    brandPartner9:String,
    brandPartner10:String,
    cardCreationDate: { type: Date, default: Date.now }
})

const autorisationCardModel = mongoose.model('autorisationCard', autorisationCardSchema)