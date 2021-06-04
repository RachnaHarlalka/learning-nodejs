var express = require('express')
const app = express()
const PORT = process.env.PORT || 8000
const dotenv = require('dotenv')

const dbConnection = require('./database/connection')
dbConnection();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// const appMiddleware = (req,res,next) =>{
//     console.log('Hii I am a middleware')
//     next()
// }

app.use('/api/v1/products', require('./routes/productRoutes'));
app.use('/api/v1/users', require('./routes/userRoutes'));


// app.get('/', appMiddleware, (req,res)=>{
//     res.send('Get method called')
// })

// app.post('/', (req,res) =>{
//     res.send('Post method called')
// })


app.listen(PORT, ()=>{
    console.log('Listening on port ' + PORT)
} )



