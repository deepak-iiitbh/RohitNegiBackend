
const express = require("express");
const app = express();
const main = require("./database/mongodb") ;
const User = require("./database/user") ;
const validator = require("./database/validatuser")
const bcrypt = require("bcrypt") ;
const cookieParser = require('cookie-parser')
const jwt = require("jsonwebtoken") ;
const userAuth = require("./middleware/auth")
const authRouter = require("./routes/auth")
const reddisClient = require("./config/redis") ;

require('dotenv').config() ;
console.log(process.env) ;


app.use(express.json());
app.use(cookieParser()) ;

app.use("/" ,authRouter) ;


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


const intializeconnection = async  ()=>{
    try{
    //    await reddisClient.connect() ;
    //    console.log("redis connected successfully") ;

    //    await main() ;
    //    console.log("connected to database successfully") ;

    await Promise.all([reddisClient.connect() , main()]) ;
    console.log("connected to database and redis successfully") ; // connecting in parallel ;;

       app.listen(4000  , ()=> {
        console.log("server is running at port no 4000") ;
       })
       
    }
    catch(error){
        res.send("error founded : " + error) ;
    }
}

intializeconnection() ;

// main().then(async ()=>{
//     console.log("connected database succesfully") ;
//     app.listen(4000, () => {
//      console.log("Server is running on port 4000");
//       });
//       await reddisClient();
//      const person = await User.find({}) ;
//      //console.log(person) ; 
// }).catch(error => console.log(error)) ;


