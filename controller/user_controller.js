const usermodel=require("../models/user_model");
const bcrypt=require("bcrypt");
const jwt = require("jsonwebtoken")
const {secretKey} = require("../config/hide")

///signup /////
exports.signUp=async(req,res)=>{
   const {name,email,password} =req.body;
    try{
       await usermodel.create({
        name:name,
        email:email,
        password:bcrypt.hashSync(password,8)
       });
      res.status(200).send({message:"User created"});
    }catch(err){
         console.log(err);
         res.status(500).send({message:"Server error"});
    }
}

/////////////signin user///////////
exports.signin=async(req,res)=>{
    try{
     const {email,password}=req.body;
      const user= await usermodel.findOne({email:email},{_id:0,createdAt:0,updatedAt:0});
      if(user){
       const passwordvalid=bcrypt.compareSync(password,user.password);
       if(!passwordvalid)
        {
          return res.status(401).send({
            message:"Password Did Not Matched"
          })
        }
        else{
          const token = jwt.sign({email:email},secretKey,{
            expiresIn:7200
          })
          res.status(200).send(
            {
              user:{
                name:user.name,
                email:user.email
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
              message:"server error"
            })
    }
}
 