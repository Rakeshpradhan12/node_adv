const express = require('express')
const router = express.Router()

router.post('/',(req,res)=>{
    const {name,id} = req.body
    if(!(name && id)){
        res.status(400).json({success:'false'})
    }
   res.status(400).json({success:'true',name,id})
})


module.exports = router

