const mongoose =require("mongoose");
const fs = require("fs")
const productmodel=require("../models/product_model");
//// insert product////
exports.createProduct=async(req,res)=>{
   try{
       const {name,description,image,price,stockQty}=req.body;
       await productmodel.create({
        name,description,image:{
            data:fs.readFileSync(image.path),
            contentType:image.type
        },price,stockQty
       });
       res.status(200).send({message:"Product created"});
   }catch(error){
    res.status(500).send({message:"server error"});
   }
} 