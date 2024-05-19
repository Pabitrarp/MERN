const admin_model = require("../models/admin_model");

exports.verifySignup = async (req,res,next) => {
    try {
        const {Name,Email,Password,Phone} =req.body;
        if(!Name)
            {
                return res.status(400).send({
                    message:"Name Not Avilable"
                })
            }
        if(!Email)
            {
                return res.status(400).send({
                    message:"Email Not Avilable"
                })
            }
        if(!Phone)
            {
                return res.status(400).send({
                    message:"Phone Not Avilable"
                })
            }
            
        if(!Password)
            {
                return res.status(400).send({
                    message:"Password Not Avilable"
                })
            }
            
        const existingAdmin = await admin_model.findOne({Email});
        if(existingAdmin)
            {
                return res.status(401).send({
                    message:"Admin Already Avilable"
                })
            }
        next();
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message:"Server Error From Middleware",
            error
        })
    }
}

exports.logInVerify = async (req,res,next) => {
    try {
        const {Email,Password} = req.body;
        if(!Email)
            {
                return res.status(400).send({
                    message:"Email Required"
                })
            }
        if(!Password)
            {
                return res.status(400).send({
                    message:"Password Required"
                })
            }
        next();
    } catch (error) {
        res.status(500).send({
            message:"Server Error"
        })
    }
}

exports.verifyToken = async (req,res,next) => {
    try {
        const token = req.headers["Authorization"];
        if(!token)
            {
                return res.status(401).send({
                    message:"Unauthorized User"
                })
            }
        next();
    } catch (error) {
        res.status(500).send({
            message:"Server Error"
        })
    }
}