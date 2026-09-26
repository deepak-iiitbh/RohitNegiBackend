const express = require("express");
const bcrypt = require("bcrypt") ;
const User = require("../database/user") ;
const validator = require("../database/validatuser")
const authRouter = express.Router() ;
const userAuth = require("../middleware/auth")


authRouter.post("/info" , async (req , res)=>{
    try{
     validator(req.body) ;
     req.body.password = await bcrypt.hash(req.body.password , 10) ;
     const info =  new User(req.body) ;
     await info.save() ;
    
    
     res.send("info added succesfullyis") ;
    }
    catch (err) {
    res.send("error found: " + err);
} ;
     

})

authRouter.post("/login", async(req, res)=>{
    try{
        const people = await User.findOne({ Email: req.body.Email });
        if(!people){
            throw new Error("invalid authentication");
        }
        const ispass = await people.verifypass(req.body.password) ; ///ye wha user wale section me jake code ko check karke aayega
        if(!ispass){
            throw new Error("invalid authentication");
        }
       
        const token = people.getJwt() ; 
        
        res.cookie("token", token);

        
        res.send("login successfully");
    }
    catch(err){
        res.send("error founded : " + err);
    }   
})

authRouter.post("/logout" ,userAuth , (req , res)=>{
    try{
       res.cookie("token" , "terinmakfdaiotedaskj") ;
       res.send("logout successfully") ;
    }catch(error){
        res.send("error founded :  "+error)
    }
})

module.exports = authRouter ;