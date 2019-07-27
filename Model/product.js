const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ProductSchema = new Schema({
  id:{
    type: Schema.Types.ObjectId,
    index: true,
    required: true,
    auto: true
  },
    title:{
        type: String,
        required: true
    },
    desc:{
        type:String,
        default: false
    },
    price:{
        type:Number,
        default: false
    },
    qty:{
        type:Number,
        default: false
    },
    img:{
        type:String,
        default: false
    },
    activ:{
        type:String,
        default: false
    },
    caregory: {
        type: String
    },
    cartQty:{
        type: String
    },
   

})

const Product = mongoose.model('product', ProductSchema)
module.exports = Product;