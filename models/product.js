
const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    url_Image: String,
})

const productModel = mongoose.model('products', productSchema)

module.exports = productModel