const mongoose = require("mongoose");

const Address = new mongoose.Schema({
    landmark:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    pinCode:{
        type:Number,
        required: true
    },
    address:{
        type:String,
        required:true
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:""
    }
},{timestamps:true,versionKey:false})

module.exports = mongoose.model("Address",Address);