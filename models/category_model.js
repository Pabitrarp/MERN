const mongoose = require("mongoose");

const Category = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    image:{
        data: Buffer,
        contentType: String
    },
},{timestamps:true,versionKey:false})

module.exports = mongoose.model("Category",Category);