const userService = require('../service/userService')
const constants = require('../constants/constants')

module.exports.signUp = async (req, res) => {

    let response = {};
    try {
        const responseFromService = await userService.signUp(req.body);
        response.status = 200;
        response.message = constants.productMessage.PRODUCT_CREATED;
        response.body = responseFromService
    } catch (err) {
        console.log('User Controller: signUp()=>', err);
        response.status = 400;
        response.message = err.message;
        response.body = {};
    }

    return res.status(response.status).send(response);
}

module.exports.logIn = async (req, res) => {

    let response = {};
    try {
        const responseFromService = await userService.logIn(req.body);
        response.status = 200;
        response.message = constants.productMessage.LOGIN_SUCCESS;
        response.body = responseFromService
    } catch (err) {
        console.log('User Controller: login()=>', err);
        response.status = 400;
        response.message = err.message;
        response.body = {};
    }

    return res.status(response.status).send(response);
}