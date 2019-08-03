const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ProductSchema = new Schema({
    id: {
        type: Schema.Types.ObjectId,
        index: true,
        required: true,
        auto: true
    },
 
    title: {
        type: String
    },
    desc: {
        type: String,
        default: false
    },
    price: {
        currency: { type: String, default: 'Rs' },
        orignal: { type: Number },
        discount: { type: Number },
    },
    qty: {
        type: Number,
        default: false
    },
    img: {
        type: String,
        default: false
    },
    images: {
        img: {
            type: String,
            default: false
        },
        thumbnail: {
            type: String,
            default: false
        },
        brandimg: {
            type: String,
            default: false
        },
    },
    active: {
        type: String,
        default: false
    },

    category: {
        type: String
    },
    cartQty: {
        type: String
    },
    shippingcharge: {
        type: Boolean
    }



})


const Product = mongoose.model('product', ProductSchema)
module.exports = Product;