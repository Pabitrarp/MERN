const categoryController = require("../controller/category_controller");
const categoryMiddleware = require("../middlewares/catatagory_middleware");

module.exports = (app) => {
    app.post("/ecomm/api/v1/catagory/create-catagory",[categoryMiddleware.verifyCreateCatagory],categoryController.createCategory);
}