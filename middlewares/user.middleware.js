const user_model = require("../models/user_model")
exports.verifySignup = async (req,res,next) => {
    try {
        const {name,email,password} =req.body;
        if(!name)
            {
                return res.status(400).send({
                    message:"Name Not Avilable"
                })
            }
        if(!email)
            {
                return res.status(400).send({
                    message:"Email Not Avilable"
                })
            }
        if(!password)
            {
                return res.status(400).send({
                    message:"Password Not Avilable"
                })
            }
            
        const existingUser = await user_model.findOne({email});
        if(existingUser)
            {
                return res.status(401).send({
                    message:"User Already Avilable"
                })
            }
        next();
    } catch (error) {
        res.status(500).send({
            messga:"Server Error"
        })
    }
}

exports.logInVerify = async (req,res,next) => {
    try {
        const {email,password} = req.body;
        if(!email)
            {
                return res.status(400).send({
                    message:"Email Required"
                })
            }
        if(!password)
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