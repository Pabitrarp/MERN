const mongoose= require("mongoose");

const User = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        min:8
    },
    adress:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Address"
    }
},{timestamps:true,versionKey:false})

module.exports = mongoose.model("User",User);