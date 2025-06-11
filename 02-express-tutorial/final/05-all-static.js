const express = require('express');
const path = require('path');
const server = express();
const html= path.resolve(__dirname,'./navbar-app/index.html')// if you're writing a relative path. Omitting ./ (like 'navbar-app/index.html') might work in some cases, but it’s not reliable and can break if the relative resolution changes.
console.log(html)

//setup static and middle wear
server.use(express.static('./public'))//static file are those what server cant's change

// server.get('/',(req,res)=>{
//     res.status(400).sendFile(html)//it handles the ending,this send file requires a absolute path/ path from the root drive
      // add in static middle wear
      //SSR
// })

server.use('*',(req,res)=>{
    res.status(404).end('<h1>resource not  found </h1>')
})
server.listen(2000,()=>{
 console.log("server is listening on port 2000")
})