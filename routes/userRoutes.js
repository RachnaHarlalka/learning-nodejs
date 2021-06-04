const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const joiSchemaValidation = require('../middleware/joiSchemaValidation');
const userSchema = require('../validateSchema/userSchema');

router.post('/signup', joiSchemaValidation.validateBody(userSchema.signUp), userController.signUp);

module.exports = router;
