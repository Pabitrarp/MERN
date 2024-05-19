const productMiddleware = require("../middlewares/product_middleware");
const productController = require("../controller/product_controller");

module.exports = (app) => {
    app.post("/ecomm/api/v1/product/create-product",[productMiddleware.verifyCreateProduct],productController.createProduct);
}