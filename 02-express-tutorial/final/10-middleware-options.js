const express = require('express');
const app = express()
const logger = require('./logger')
const author = require('./auth')
const morgan = require('morgan')

// order matters,where it is from there logger id added (node executes code sequentially)
// app.use(logger)//to every rout

// 3 types of middleware - user defined , express , third party 
// app.use(express.static('../public))
app.use('/api',[logger,author]) // rout starts with or begins with ' /api '
app.use('/api/about',morgan('tiny'))
app.get('/',logger,(req,res)=>{
  res.send('Home Page');
  
})
app.get('/about',(req,res)=>{
  // console.log(req.users)
  res.send('about Page');
})
app.get('/products',(req,res)=>{
  res.send('products Page');  
})

app.get('/api/about',(req,res)=>{
  console.log(req.users)//you can add this after send()
  res.send( `about Page ${req.users.name}`);
 
  
})
app.get('/api/products',(req,res)=>{
  res.send('products Page');  
})


app.listen(3000,()=>{
  
  console.log('app is listening on port : 3000')
})