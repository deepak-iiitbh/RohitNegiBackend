const express = require("express") ;

const app = express() ;
// app.use((req , res) =>{
//     res.send("hey deepak is here at port no ") ;
// })

// app.use("/abou*t" , (req, res)=>{
//     res.send("this is about page having star") ;
//     // u ke baad kuch bhi likho end with t hone chahiye bass
// })

// app.use("/abou+t" , (req, res)=>{
//     req.send("this is about page having plus") ;
//     // u ke baad kitne bhi u likho end with t hone chahiye bass
// })

// app.use("/abou?t" , (req, res)=>{
//     req.send("this is about page having ?") ;
//     // u likho ya na likho baat same hi he 
// })

app.use(express.json()) ;

app.use("/about/:id/:user" , (req , res)=>{

    const para = req.params ;
    console.log(para) ;
    res.send({
        "name" : para.id ,
        "user" : para.user 
    })
})

app.post("/user" , (req, res)=>{
    console.log(req.body) ;
    res.send("data save successfully") ;
})

app.listen(4000 , ()=>{
    console.log("server is starting") ;
})

