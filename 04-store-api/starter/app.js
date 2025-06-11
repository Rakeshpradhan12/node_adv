require('dotenv').config() // access to env file
//async error
require('express-async-errors')

const express = require('express')
const app = express();
const connectDB=require('./db/connect');

const errMiddleWare = require('./middleware/error-handler');
const notFoundMiddleWare = require('./middleware/not-found')

//middleware
const router = require('./routes/products')

// app.use(express.urlencoded({extended:false}))//if you are sending body through <form> elements through post on url
app.use(express.json());

//routes

app.get('/',(req,res)=>{
    res.status(200).send(`<h1>store api</h1>
                          <a href="/api/v1/products">products route</a>`)
})

app.use('/api/v1/products', router);

//products routes
app.use(notFoundMiddleWare);
app.use(errMiddleWare);

const port = process.env.PORT || 4000

const start = async()=>{
    try{
           await connectDB(process.env.MONGO_URI)
            app.listen(port,()=>{
               console.log("app is listening on port  : 4000")
          })
       
    }
    
    catch(err){
          console.log(err)
    }
    
}

start();
