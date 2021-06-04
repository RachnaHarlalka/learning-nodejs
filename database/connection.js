const mongoose = require('mongoose')

module.exports = async ()=>{

    try{
        await mongoose.connect('mongodb://localhost/test' , {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Database Connected')
    }catch(err){
        console.log('Database connection error', err);
        throw new Error(err);
    }


}