const Product = require('../database/model/ProductModel');
const { formatMongoData , checkObjectId} = require("../helper/dbHelper");
const constants = require('../constants/constants');
const mongoose = require('mongoose');

module.exports.createProduct = async (serviceData) => {
    try {
        let product = new Product({ ...serviceData });
        let result = await product.save();
        return formatMongoData(result);
    } catch (err) {
        throw new Error(err);

    }

}


// module.exports.getAllProducts = async (serviceData) => {
//     try {
//         let products = await Product.find({});
//         return formatMongoData(products);

//     } catch (err) {
//         console.log('Product Service : getAllProducts: Something went wrong', err);
//         throw new Error(err)

//     }
// }


module.exports.getAllProducts = async ({skip=0, limit=10}) => {
    try {
        let products = await Product.find({}).skip(parseInt(skip)).limit(parseInt(limit));
        return formatMongoData(products);

    } catch (err) {
        console.log('Product Service : getAllProduct : Something went wrong', err);
        throw new Error(err)

    }
}

module.exports.getProductById = async (id) => {
    try {
        checkObjectId(id);
        let products = await Product.findById(id);
        if(!products){
            throw new Error(constants.productMessage.PRODUCT_NOT_FOUND);
        }
        return formatMongoData(products);

    } catch (err) {
        console.log('Product Service : getAllProduct : Something went wrong', err);
        throw new Error(err)

    }
}

module.exports.updateProduct = async ({ id, updateInfo }) => {
    try {
        checkObjectId(id);
        let products = await Product.findOneAndUpdate(
         {_id: id},
         updateInfo,
         {new:true}       
     );
        if(!products){
            throw new Error(constants.productMessage.PRODUCT_NOT_FOUND);
        }
        return formatMongoData(products);

    } catch (err) {
        console.log('Product Service : getAllProduct : Something went wrong', err);
        throw new Error(err)

    }
}


module.exports.deleteProduct = async ({id}) => {
    try {
        checkObjectId(id);
        let products = await Product.findByIdAndDelete(id);
        if(!products){
            throw new Error(constants.productMessage.PRODUCT_NOT_FOUND);
        }
        return formatMongoData(products);

    } catch (err) {
        console.log('Product Service : getAllProduct : Something went wrong', err);
        throw new Error(err)

    }
}