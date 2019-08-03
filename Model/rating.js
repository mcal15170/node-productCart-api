const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var RatingSchema = new Schema({
  id:{
    type: Schema.Types.ObjectId,
    index: true,
    required: true,
    auto: true
  },
    rating: Number,
    review: String,
    productid:  {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product'
    },
    usertid:  {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },

})

const Rating = mongoose.model('cart', RatingSchema)
module.exports = Rating;