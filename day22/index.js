
const express = require("express");
const app = express();
const main = require("./database/mongodb") ;
const User = require("./database/user") ;
const validator = require("./database/validatuser")
const bcrypt = require("bcrypt") ;
const cookieParser = require('cookie-parser')
const jwt = require("jsonwebtoken") ;
const userAuth = require("./middleware/auth")


app.use(express.json());
app.use(cookieParser()) ;

app.post("/info" , async (req , res)=>{
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

app.post("/login", async(req, res)=>{
    try{
        const people = await User.findOne({ Email: req.body.Email });
        if(!people){
            throw new Error("invalid authentication");
        }
        const ispass = await people.verifypass(req.body.password) ; ///ye wha user wale section me jake code ko check karke aayega
        if(!ispass){
            throw new Error("invalid authentication");
        }
        // const token = jwt.sign({
        //     _id: user._id,
        //     Email: user.Email
        // }, "deepakchaudhary" , {expiresIn:100}); //here 10 is ten second
        const token = people.getJwt() ; 
        res.cookie("token", token);
        
        res.send("login successfully");
    }
    catch(err){
        res.send("error founded : " + err);
    }
})

app.delete("/info/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const user = await User.findByIdAndDelete(_id);
        if (!user) {
            return res.status(404).send("User not found");
        }
        res.send("User deleted successfully");
    }
    catch (err) {
        console.log(err);
        res.status(500).send("Error found: " + err.message);
    }
});

app.get("/comments" , userAuth ,(req ,res)=>{
    try{
        
        res.send("comments show successfully") ;
    }catch(err){
        res.send("error found : "+err) ;
    }
})



app.get("/user" , userAuth ,async(req , res)=>{
    try{
       
        res.send(req.result) ;
    
    }catch(err){
        res.send("error foundede ")
    }
    
})

main().then(async ()=>{
    console.log("connected database succesfully") ;
    app.listen(4000, () => {
     console.log("Server is running on port 4000");
      });

     const person = await User.find({}) ;
     //console.log(person) ; 
}).catch(error => console.log(error)) ;


