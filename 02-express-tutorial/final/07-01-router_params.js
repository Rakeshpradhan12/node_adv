const express = require('express')
const app = express()
const{products}=require('./data')


app.get('/',(req,res)=>{
    res.end(`<h1>This is home page</h1>
        <a href='/api/products'>products details</a>`)
})
app.get('/api/products',(req,res)=>{
    res.json (products.map((product)=>{
        const {id,name,image,price} = product;
        return ({id,name,image,price});
    }))
})


app.get('/api/products/:id',(req,res)=>{
     res.json(products.find((p)=> p.id === Number(Router.params.id)
     ))
})



app.use('*',(req,res)=>{
    res.status(400).send('file not found')
})

app.listen(4000,()=>{
    console.log('app is listening on port 4000')
})