const express = require("express");
const app = express();
const {products,people} = require('./data');
const data = require('./data')

//manually adding data
// app.get('/',(req,res)=>{
//     res.json([
//         {
//             name : "Madhu",
//             id : 1234,
//             company : "Tcs"

//          },
//          {
//             name : "Ram",
//             id : 1334,
//             company : "Tcs"

//          },
//          {
//             name : "Mohan",
//             id : 12354,
//             company : "Capgmini"

//          }

// ])
// })

//importing from data file
app.get('/',(req,res)=>{
    res.json(data)//you can send array,string etc ,here data is an array
})
app.get('/product',(req,res)=>{
    res.json(products)
})


app.use('*',(req,res)=>{
    res.status(404).end(`
        <h1>resource not found, use correct url</h1>`)
})


app.listen(4000,()=>{
    console.log("server is listening on port 4000 ")
})