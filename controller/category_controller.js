const category_model = require("../models/category_model")

exports.createCategory = async (req,res) => {
    try{
        const {name,image} = req.body;

        await category_model.create({
            name,
            image:{
                data:fs.readFileSync(image.path),
                contentType:image.type
            }
           });
           res.status(200).send({message:"Product created"});
    }
    catch(error){
        console.log(error);
        rres.status(500).send({
            message:"Server Error"
        })
    }
}