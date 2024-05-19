const userController = require("../controller/user_controller");
const userMiddleware=require("../middlewares/user.middleware");
module.exports = (app) =>{
    //Sign-In user
    app.post("/ecomm/v1/user/sign-up",[userMiddleware.verifySignup],userController.signUp);
    //Log-in user
    app.post("/ecomm/v1/user/log-in",[userMiddleware.logInVerify],userController.signin)

}