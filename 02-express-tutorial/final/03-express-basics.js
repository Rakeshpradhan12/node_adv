const express = require('express');
const data = express();

data.get('/',(req,res)=>{
    res.end(`<h1>Home Page</h1>`)
})
data.get('/about',(req,res)=>{
    res.write(`
              <h1> this is about page <h1>
              <a href = '/'> home </a>
              `)
    res.status(200).end()
})
data.all('*',(req,res)=>{
    res.status(400).end("resource not available")
})



data.listen(3000,()=>{
  console.log("app is running in port no. : 3000");
})

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen
