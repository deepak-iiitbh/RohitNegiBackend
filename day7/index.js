const express = require("express") ;

const app = express() ;



const arr = [
  { id: 1, name: "To Kill a Mockingbird", authorName: "Harper Lee" },
  { id: 2, name: "1984", authorName: "George Orwell" },
  { id: 3, name: "The Great Gatsby", authorName: "F. Scott Fitzgerald" },
  { id: 4, name: "Pride and Prejudice", authorName: "Jane Austen" },
  { id: 5, name: "The Catcher in the Rye", authorName: "J.D. Salinger" },
  { id: 6, name: "The Hobbit", authorName: "J.R.R. Tolkien" },
  { id: 7, name: "Fahrenheit 451", authorName: "Ray Bradbury" },
  { id: 8, name: "Brave New World", authorName: "Aldous Huxley" },
  { id: 9, name: "Crime and Punishment", authorName: "Fyodor Dostoevsky" },
  { id: 10, name: "The Alchemist", authorName: "Paulo Coelho" }
];

app.use(express.json());

app.get("/user/:id/:name" , (req ,  res)=>{
    const temp = req.params ;
    const id = temp.id ;
    const name = temp.name ;

    console.log("server is ready")
    res.send([arr[id] , name]) ;
    
})

app.post("/user" , (req , res)=>{
    console.log(req.body) ;
    arr.push(req.body) ;
    res.send("sab changa si") ;
    console.log(arr) ;
})

app.patch("/book" , (req, res)=>{
    console.log(req.body) ;
    const book = arr.find(info=> info.id===req.body.id) ;
    if(req.body.authorName){
        book.authorName= req.body.authorName ;
    }
    if(req.body.name){
        book.name = req.body.name ;
    }
    res.send("sab changa si") ;
    console.log(arr);
})

app.listen(4000 , ()=>{
    console.log("server is staring") ;
})