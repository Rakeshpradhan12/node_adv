const express = require('express')
const app = express()
const route = require('./routers/people')
const auth = require('./routers/auth')

app.use(express.static('./methods-public'))// if you not pass anything it is send on root 

app.use(express.json())//for js data we need to handle by json method
app.use(express.urlencoded({extended:'false'}))

app.use('/login',auth)
app.use('/api/people',route)



// app.post('/api/people',(req,res)=>{
//      const {name} =req.body
//      if(!name){
//       res.status(401).json({data :'unsuccess',msg:'enter a entity'})
//      }
//      res.status(200).json(name)
// })//for the js form

app.listen(2000,()=>{
  console.log('app is listening on port : 2000')
})

