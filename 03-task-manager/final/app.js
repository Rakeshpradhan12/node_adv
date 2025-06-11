const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config()
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

// middleware

app.use(express.static('./public'))

app.use(express.json());

// routes

app.use('/api/v1/tasks', tasks);



app.use(notFound);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async()=>{
      try{
          await connectDB(process.env.MONGO_URI)
         //only if we success to connectDB we run the server
         app.listen(port,()=>{
             console.log(`server is listening ${port}`)
          })
        }
      catch(err){
         console.log(err)
      }
       
}
start()





// const start = async () => {
//   try {
//     await connectDB(process.env.MONGO_URI);
//     app.listen(port, () =>
//       console.log(`Server is listening on port ${port}...`)
//     );
//   } catch (error) {
//     console.log(error);
//   }
// };

// start();



