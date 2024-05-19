const  mongoose = require("mongoose");

const cartItem = new mongoose.Schema({
    itemQty:{
        type:Number,
        required:true
    },
    totalPrice:{
        type:Number,
        required:true
    },
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product"
    }
})

const cart = new mongoose.Schema({
    customerId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    name:{
        type:String
    },
    cartItems : [cartItem]
})
module.exports = mongoose.model("Cart",cart)