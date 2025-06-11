// const Task = require('../models/Task')
const Task = require('../models/Task')
const asyncWrapper = require('../middleware/async')
const { createCustomError } = require('../errors/custom-error')
// const { default: mongoose } = require('mongoose')

const getAllTasks = asyncWrapper( async (req, res,next) => {
  const tasks = await Task.find({})
  res.status(200).json({tasks})
})

const createTask =asyncWrapper( async (req,res)=>{
      const task = await Task.create(req.body) // using method create a document to database 
      console.log(req.body)
      res.status(201).json(task) 
    })

const getTask = asyncWrapper( async (req, res,next) => {
 
// console.log(req.params.id)
      const {id:taskId} = req.params;
      const task = await Task.findOne({_id:taskId}) // it is alias of id , we create    
      if(!task){
        //404 - task does't exists
        return next(createCustomError(`No task with id : ${taskId}`,404));
       
      }
      res.status(200).json({task}) 

})


const deleteTask = asyncWrapper( async (req, res,next) => {
 
      const {id:taskId} = req.params
      const task = await Task.findOneAndDelete ({ _id : taskId});
      if(!task){
        // return res.status(404).json({msg:`no task with id :${taskId}`})
        return next(createCustomError(`No task with id : ${taskId}`,404));//using custom middle ware
      }
      res.status(200).json({task}) // here we use .json({task:null , msg :'success'}) because we do't need the task we know from status code that it is success
   
})



const updateTask =asyncWrapper( async (req, res,next) => {
   
        const {id} = req.params
        // console.log(req.body) // app.use(express.urlencoded())  
        const task = await Task.findOneAndUpdate({_id : id},req.body,{
          new:true,
          runValidators:true 
        })
        if(!task){
          // return res.status(404).json({msg:`no task with id :${id}`})
          return next(createCustomError(`No task with id : ${id}`,404));
        }
        res.status(200).json({task}) 
})

// const editTask = async (req,res)=>{
//      const {id: taskId} = req.params
//      try{
//           const task = await Task.findOneAndUpdate({_id:taskId},req.body,{
//               new :true,
//               runValidators : true,
//               overwrite : true
//           })
//           if(!task){
//             res.status(404).json({status:'success',msg:`no data find with id :${taskId}`})
//           }
//           // res.status(200).json({status:'success',data:task})
//           res.status(200).json({task})

//      }
//      catch(err){
//         res.status(404).json({msg:err.message})
//      }
// }


module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
  // editTask
}