const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Please enter a product name"]
    },
    quantity:{
        type: Number,
        required: true,
        default: 0
    },
    price:{
        type: Number,
        required: true,
    },
    image:{
        type: String,
        required: false,
    },
}, {timestamps: true})

module.exports = mongoose.model('Products', productSchema)