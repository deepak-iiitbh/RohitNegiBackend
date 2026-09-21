
const express = require("express");
const app = express();
const main = require("./database/mongodb") ;
const User = require("./database/user") ;
const validator = require("./database/validatuser")
const bcrypt = require("bcrypt") ;

app.use(express.json());

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

app.get("/info" , async(req , res)=>{
    try{
        const user  = await User.find({"name" : "deepak"}) ;
    if(!user){
        res.send("there is not a valid user here enete again") 
    }else{
        res.send(user) ;
    }
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


