const express = require('express');
const route = express.Router();
const {people} = require('../data')

route.get('/',(req,res)=>{
     res.status(200).json(people)
})

route.get('/name/:id',(req,res)=>{
      const {id} = req.params 
      const data = people.find((p)=>{
         return p.id===Number(id)
      })
      
      if(!data){
        res.status(404).json({success: false , msg:"data not found"})
      }
      
      res.status(200).json({data})

})
route.post('/name',(req,res)=>{
  const {id,name}=req.body
  if(!(name || id)){
    res.status(404).json({success:'false'})
  }
  res.status(404).json([...people,{id,name}])
})
route.put('/name/:rId',(req,res)=>{
     const {rId} = req.params
     const {name} = req.body
     const data = people.find((p)=>p.id === Number(rId))
     if(!data){
        res.status(200).json({success:'false',msg:'no data found'})
     }
     const newData = people.map((p)=>{
      if(p.id === Number(rId)) {
        p.name = name
      }  
      return p
    })
    res.status(200).json({newData})

})
route.delete('/name/:rId',(req,res)=>{
     const {rId} = req.params
     const data = people.find((p)=>p.id === Number(rId))
     if(!data){
        res.status(200).json({success:'false',msg:'no data found'})
     }
     const newData = people.filter((p)=>{     
      return p.id!=Number(rId)
    })
    //  people.splice(rId-1,1)

    res.status(200).json({newData})

})

module.exports = route