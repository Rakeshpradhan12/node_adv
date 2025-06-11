const author = (req,res,next)=>{

    // using the query sting for authentication purpose for demo not in real life,we use token there instead query string
   const {user} =  req.query;
    
   if(user === 'john'){
    // you can add any thing inside request object like users here
      req.users = {name : 'john',id : 78}
      console.log(req.users)
      next()
   }
   else{
   // console.log(err.stack)
    res.status(404).end('file not found')
   }  
}

module.exports = author