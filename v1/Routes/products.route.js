const express = require("express");
const productController = require("../Controllers/products.controller");
const verifyToken = require("../Middlewares/verifyToken");
const router = express.Router();


// publish a product
router.post("/", productController.publishAProduct);

// get all products
router.get("/", productController.getAllproducts);

// get single product
router.get("/:id", productController.getSingleProduct);

// delete a product
router.delete("/:id", productController.deleteAProduct);

// approve a product
router.put("/:id", productController.updateAProduct);



module.exports = router;