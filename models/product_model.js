const mongoose= require("mongoose");

const Product = new mongoose.Schema({
   name:{
    type:String,
    required:true
   },
   description:{
    type:String,
    required:true
   },
   image:{
      data: Buffer,
      contentType: String
  },
   price:{
    type:Number,
    required:true
   },
   stockQty:{
    type:Number,
    required:true
   },
   category:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"Category"
   }
},{timestamps:true,versionKey:false})

module.exports = mongoose.model("Product",Product);