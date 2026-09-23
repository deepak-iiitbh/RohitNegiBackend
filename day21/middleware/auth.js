const jwt = require("jsonwebtoken") ;
const User = require("../database/user")

const userAuth = async(req , res , next)=>{
    try{
         const {token} = req.cookies ;
         if(!token){
            throw new Error("token is not available first login again") ;
         }
         const payload = jwt.verify(token , "deepakchaudhary") ;
         const {_id} = payload ;
         if(!_id){
            throw new Error("Id is not there enter the id first") ;
         }  
         const result = await User.findById(_id) ;
         if(!result){
            throw new Error("user is not present in the database signup first")
         }
         req.result  = result ;
        next() ;
    }
    catch(Error){
        res.send("error founded : "+Error) ;
    }
}

module.exports = userAuth ;