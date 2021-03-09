var mongoose = require('mongoose')

var orderProductsSchema = mongoose.Schema({
    name: String,
    url: String,
    price: Number,
    quantity: Number,
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'products' },
});

var ordersSchema = mongoose.Schema({
    dateCommande: Date,
    montantTotal: Number,
    montantProduits: Number,
    CommandeValide: Boolean,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    products: [orderProductsSchema]
})

module.exports = mongoose.model('orders', ordersSchema)