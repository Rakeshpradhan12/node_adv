const mongoose = require('mongoose')

const productsSchema = new mongoose.Schema({
        name : {
            type : String,
            required:[true,'product name must be provide']
        },
         price : {
            type : Number,
            required:[true,'product price must be provide']
        },
         featured : {
            type : Boolean,
            default:false
        },
        rating :{
            type: Number,
            default : 4.6
        },
        createdDate : {
            type:Date,
            default:Date.now()
        },
        company:{
            type:String,
            enum :{
                values : ['ikea','liddy','caressa','marcos','kinakey','capgmini'],
                message :'{VALUE} is not supported'
            }
            // enum:['ikea','liddy','caressa','marcos','kinakey','capgmini'],

        }
    }
)

module.exports = mongoose.model("product",productsSchema)