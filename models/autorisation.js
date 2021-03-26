const mongoose = require ('mongoose')

const autorisationSchema = mongooseSchema ({
    userId: String,
    culturDep: Boolean,
    sportEquipment: Boolean,
    playStores: Boolean,
    cinemas: Boolean,
    shows: Boolean,
    hightTech: Boolean,
    music: Boolean,
    sportswears: Boolean,
    accesLuggages: Boolean,
    fashion: Boolean,
    shoes: Boolean,
    foodStores: Boolean,
    snack: Boolean,
    beauty: Boolean,
    gift: Boolean,
    autorisationDate: { type: Date, default: Date.now }
})

const autorisationModel = mongoose.model('autorisation', autorisationSchema)