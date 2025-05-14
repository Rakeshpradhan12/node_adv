const express = require('express');
const data = express();
data.get('/',(req,res)=>{
    res.end(<h1> Home page</h1>)
})

data.listen(8000,()=>{
  console.log("app is running in port no. : 3000");
})