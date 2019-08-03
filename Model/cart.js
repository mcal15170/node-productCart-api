const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var CartSchema = new Schema({


  product: [
    product = {
      productid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product'
      },
      qty: Number,
    }
  ]

})

CartSchema.pre('save', async function (next) {
  const cart = this;
  console.log(cart)
  next();
});

const Cart = mongoose.model('cart', CartSchema)
module.exports = Cart;