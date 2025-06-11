const product = require('../models/product')

const getAllProducts = async(req,res)=>{
     const {featured,company,name,sort,find} = req.query;// here "false" and "true" come as an string not boolean and i am using result instead of name to show that you can fetch as one variable and pass as another variable.

     const getObject = {};

     if(featured){
          getObject.featured = featured === "true" ? true :false;
     }
     if(company){
          getObject.company = company
     }
     if(name){
          getObject.name = {$regex:name ,$options:'i'} // $regex - pattern(contains) , $option - case insensitive
     }

     console.log(req.query)
     let result = product.find(getObject);
    
     //performing sorting operation here
     if(sort){
          //if more than one parameter present for sorting
          //here we are doing multiple chaining operation that mongoose provides us(find,sort,select,limit,skip....) till we not use await it not hit the data base we have the object and we can use all mongoose function , after await it hit database and return an array of object so we can't perform other operations
          const sortList = sort.split(',').join(' ');
          result = result.sort(sortList);
     }
     else{
          result = result.sort('createdDate');
     }
     if(find){
          const findList = find.split(',').join(" ");
          result = result.select(findList);
     }

     const page = Number(req.query.page) || 1;
     const limit = Number(req.query.limit) || 10;
     const skip = (page-1)*limit;
     result = result.limit(limit).skip(skip);

     const products =await result;
     
     res.status(200).json({nbHits : products.length,products})
     // throw new Error('testing express-router-error')
     
}

const getStaticProducts = async(req,res)=>{
     //  const products = await product.find({});
     const {featured,name,price}=req.query;
     const getObject = {};
     if(featured){
          getObject.featured = featured ==='true'?true:false;
     }
     if(name){
          getObject.name = {$regex:name,$options:'i'}
     }
     console.log(getObject);
     const products = await product.find(getObject).sort('-name price');
      res.status(200).json({products,nbHits:products.length})
     //  throw new Error('testing express-router-error')
}

module.exports ={
    getAllProducts,
    getStaticProducts
}