const adminMiddleware = require("../middlewares/admin_midlleware");
const adminController = require("../controller/admin_controller");
module.exports = (app) =>{
    //Sign-In user
    app.post("/ecomm/v1/admin/sign-up",[adminMiddleware.verifySignup],adminController.signup);
    //Log-in user
    app.post("/ecomm/v1/admin/log-in",[adminMiddleware.logInVerify],adminController.signin);

}