const errorHandlerMiddleware = (err,req,res,next)=>{
       console.log(err)
       return response.status(500).json({msg:"something wrong happened , try again ..."})
}

module.exports = errorHandlerMiddleware

