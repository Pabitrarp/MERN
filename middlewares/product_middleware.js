const product_model = require("../models/product_model");

exports.verifyCreateProduct = async (req,res,next) => {
    const {name,description,image,price,stockQty,category} = req.body;
    try {
        switch(true)
    {
        case !name:
            return res.status(400).send({error:"Name Is Required"});
        case !description:
            return res.status(400).send({error:"Description Is Required"});
        case !price:
            return res.status(400).send({error:"Price Is Required"});
        case !stockQty:
            return res.status(400).send({error:"Stock Quantity Is Required"});
        case !category:
            return res.status(400).send({error:"Category Is Required"});
        case !image:
            return res.status(400).send({error:"Image Is Required"});
    }

    const isProductAvilable = await product_model.findOne({name});
    if(isProductAvilable)
        {
            return res.status(409).send({
                message:"Product Is Already Avilable"
            })
        }
        next();
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            message:"Internal Error"
        })
    }
}

