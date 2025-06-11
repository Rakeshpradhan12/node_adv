
const mongoose = require('mongoose')

const taskManager = new mongoose.Schema({
       name : {
         type:String,
         required:[true,'name is mandatory'],
         trim:true,
         maxLength : [20,'size of character should be less than 20']
       },
       address : { 
          type : String,
          required:false
       },
       completed:{
       type:Boolean,
       default:false
      }

})

module.exports = mongoose.model('Task',taskManager)