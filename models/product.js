
const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
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
    creationDate: { type: Date, default: Date.now }
})

const productModel = mongoose.model('products', productSchema)

module.exports = productModel