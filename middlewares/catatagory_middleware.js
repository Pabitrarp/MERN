const catagory_model = ("./models/catagory_model");

exports.verifyCreateCatagory = async(req,res,next) => {
    const {name,image}=req.body;
    try{
        switch(true){
            case !name:
                return res.status(400).send({error:"Name is required"});        
            case !image:
                return res.status(400).send({error:"Image is required"});
        }
        const isCatagoryAvilable = await catagory_model.findOne({name});
        if(isCatagoryAvilable)
            {
                return res.status(409).send({
                    message:"Catagory Is Already Avilable"
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