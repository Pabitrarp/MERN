const mongoose = reuire("mongoose");

const payment = mongosse.Schema({
    payment_id:{
        type:String,
        required:true
    },
    payment_signature:{
        type:String,
        required:true
    },
    total_price:{
        type:Number,
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        referance:"User"
    }

},{timestamps:true,versionkey:false});
module.exports = mongoose.Model("payment",payment);