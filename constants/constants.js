module.exports = {
    defaultServerResponse: {
        status: 400,
        message: "",
        body: {}
    },
    productMessage: {
        PRODUCT_CREATED : 'Product created successfully',
        PRODUCT_FETCHED : 'Product fetched successfully',
        PRODUCT_UPDATED : 'Product updated successfully',
        PRODUCT_DELETED : 'Product deleted successfully',
        PRODUCT_NOT_FOUND : 'Product not found with given id'
    },
    userMessage:{
        SIGNUP_SUCCESS : 'Signup success',
        DUPLICATE_EMAIL : 'User already exists with given email',
        LOGIN_SUCCESS : 'Use is logged in successfully',
        USER_NOT_FOUND : 'No user with this email id',
        INVALID_PASSWORD : 'Password not matching'

    },
    requestValidationMessage: {
        BAD_REQUEST: 'Invalid fields'
    },
    databaseMessage:{
        INVALID_ID : "Given id is invalid"
    }
}