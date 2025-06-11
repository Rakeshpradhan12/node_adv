//express pass req,res inside it , we can manually pass it to every rout or use app.use(logger) to pass to all routs
const logger = (req,res,next)=>{
   const url = req.url;
   const method = req.method;
   const date= new Date()
   console.log(method , url , date);
   // either we passed control to next function or end res here, it is called before callback and we can do all the things here (if we want then pass control to call back or end it here)
    // res.end("MiddleWare Power")
   next();
  }

  module.exports = logger