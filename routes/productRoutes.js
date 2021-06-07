const express = require('express');
const { required } = require('joi');
const router = express.Router();
const productController = require('../controller/productController')
const joiSchemaValidation = require('../middleware/joiSchemaValidation')
const productSchema = require('../validateSchema/productSchema')

router.post('/',
    joiSchemaValidation.validateBody(productSchema.createProductSchema),
    productController.createProduct
);

router.get(
    '/', 
joiSchemaValidation.validateQueryParams(productSchema.getAllProductSchema),
 productController.getAllProducts
 );



router.put(
    '/',
    joiSchemaValidation.validateBody(productSchema.updateProductSchema),
     productController.updateProduct
    );
    

router.get(
    '/:id',
 productController.getProductById
);

router.delete(
    '/:id',
 productController.deleteProduct
);



module.exports = router;

   