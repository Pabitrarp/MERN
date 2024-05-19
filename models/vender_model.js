const mongoose = require("mongoose");

const vendor = new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    Phone:{
        type:Number,
        required:true
    }, 
    Password:{
        type:String,
        required:true
    }

},{timestamps:true,versionkey:false});
module.exports = mongoose.model("vendor",vendor); 