const mongoose = require('mongoose')

const purchaseSchema = mongoose.Schema({
    userId:String,
    category: String,
    commercialName: String,
    commitment: String,
    nbrPoints: Number,
    period: String,
    discipline: String,
    grade: String,
    priceHT: Number,
    taxeTVA: String,
    priceTTC: Number,
    durationDays: Number,
    beginingDate: Date,
    endDate: Date,
    purchaseDate: { type: Date, default: Date.now }
})

const purchaseModel = mongoose.model('purchase', purchaseSchema)

module.exports = purchaseModel