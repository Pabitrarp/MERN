const vendermodel=require("../models/vender_model");
const bcrypt=require("bcrypt");
const {secretKey}=require("../config/hide")
const jwt =require("jsonwebtoken");

/////vender signup///////////////
exports.signup=async(req,res)=>{
    const {Name,Email,Phone,Password} =req.body;
    try{
       await vendermodel.create({
        Name,
        Email,
        Phone,
        Password:bcrypt.hashSync(Password,8)
       });
      res.status(200).send({message:"vender created"});
    }catch(err){
         console.log(err);
         res.status(500).send({message:"Server error"});
    }
}
//// vender signup//////////////
exports.signin=async(req,res)=>{
    try{
     const {Email,Password}=req.body;
      const user= await vendermodel.findOne({Email},{_id:0,createdAt:0,updatedAt:0});
      if(user){
       const passwordvalid=bcrypt.compareSync(Password,user.Password);
       if(!passwordvalid)
        {
          return res.status(401).send({
            message:"Password Did Not Matched"
          })
        }
        else{
          const token = jwt.sign({Email:Email},secretKey,{
            expiresIn:7200
          })
          res.status(200).send(
            {
              user:{
                name:user.Name,
                email:user.Email
            },
              token
            }
          )
        }
      }else{
        res.status(401).send({message:"User Not Registered"});
      }

    }catch(err){
        console.log(err);
        res.status(500).send(
            {
              message:"Server error"
            })
    }
}
