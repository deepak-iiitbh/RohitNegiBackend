const express = require("express");
const app = express();
const main = require("./database/mongodb") ;
const User = require("./database/user") ;

app.use(express.json());

app.post("/info" , (req , res)=>{
    try{
       const info = new User(req.body) ;
     info.save() ;
     res.send("info added succesfully") ;
    }
    catch{
        res.errored("error found" , error) ;
    } ;
     

})

main().then(async ()=>{
    console.log("connected database succesfully") ;
    app.listen(4000, () => {
     console.log("Server is running on port 4000");
      });

     const person = await User.find({}) ;
     console.log(person) ; 
}).catch(error => console.log(error)) ;


