const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const cart = require('./cart');


var UserSchema = new Schema({
    cartid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'cart'
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    isverified:{
        type:Boolean,
        default: true
    },
    firstname: {
        type: String
    },
    lastname:{
        type: String
    },
    phone:{
        type: String
    },
    Verifytoken: {
        type: String,
        unique: true
    }

})

UserSchema.pre('save', async function (next) {
    const user = this;
    const cartdata = await cart.create({});
    user.cartid = cartdata.id;
    next();
});

const User = mongoose.model('users', UserSchema)
module.exports = User;