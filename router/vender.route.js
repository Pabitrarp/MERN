const venderMiddleWare = require("../middlewares/vendor_midllewarre");
const venderController = require("../controller/vender_controller")
module.exports = (app) =>{
    //Sign-In user
    app.post("/ecomm/v1/vender/sign-up",[venderMiddleWare.verifySignup],venderController.signup);
    //Log-in user
    app.post("/ecomm/v1/vender/log-in",[venderMiddleWare.logInVerify],venderController.signin);

}