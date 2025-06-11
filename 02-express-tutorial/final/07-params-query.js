const express =require('express')
const app = express()
const {products,name} = require('./data')
app.get('/',(req,res)=>{
  res.send(`<h1>This is home page</h1>
           <a href='/products'>products</a>`)
})

app.get('/products',(req,res)=>{
   res.json( products.map((p)=>{
     const {id,name,price} = p;
     return {id,name,price};

    }))
})
// here the id is inside req.params we override the params and put id key it(request params)
app.get('/products/:id',(req,res)=>{
      // console.log(req.params)
      const {id} = req.params;
    const setProducts= products.find((p)=> p.id == Number(id))
    if(!setProducts){
      res.json({
        status : 'successful',
        data  : []

      })
    }
    res.json(setProducts)
})

// url params or query params (extra data comes after ?  for filtering perpose)

app.get('/api/v1/query',(req,res)=>{
      
   console.log(req.query)
 
   const {id,name,limit} = req.query;
   let setProducts = [...products]

  //  console.log(id)
 
   if(id){
       setProducts = setProducts.filter((p)=>p.id === Number(id));
   }

   
   if(name){
    setProducts = setProducts.filter((p)=>{
      return p.name.startsWith(name)
    })
   }

   if(limit){
    setProducts=setProducts.slice(0,Number(limit));
   }

    if(setProducts.length< 1){
      res.json({
        status : 'successful',
        data  : []

      })
    }
    res.json(setProducts)
})





app.use('*',(req,res)=>{
  res.status(404).send('<h1>file not found</h1>')
})

app.listen(3000,()=>{
  console.log('app is listening on port no. : 3000')
})