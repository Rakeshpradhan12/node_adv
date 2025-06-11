
const mongoose = require("mongoose")
// if you have not create the db mongoose create it for you (task-manager here)


// here we are returning a promise
const connectDb = (url)=>{
     return ( mongoose.connect(url,
  {
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false,
    useUnifiedTopology:true
  }
) )
}

module.exports=connectDb

//here we are calling the function so only need to require in app.js