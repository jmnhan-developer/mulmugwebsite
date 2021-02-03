
const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    url_Image: String,
    stockInBasket: Number


    
})

const productModel = mongoose.model('products', productSchema)

module.exports = productModel