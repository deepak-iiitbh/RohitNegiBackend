const express = require("express");
const app = express();
const {auth} = require("./middleware/auth")
app.use(express.json());

const foodItems = [
  { id: 1, name: "Margherita Pizza", price: 299 },
  { id: 2, name: "Paneer Butter Masala", price: 240 },
  { id: 3, name: "Chicken Biryani", price: 320 },
  { id: 4, name: "Garlic Butter Naan", price: 45 },
  { id: 5, name: "Masala Dosa", price: 110 },
  { id: 6, name: "Classic Cheeseburger", price: 180 },
  { id: 7, name: "Veg Hakka Noodles", price: 160 },
  { id: 8, name: "Crispy French Fries", price: 99 },
  { id: 9, name: "Tandoori Chicken (Half)", price: 280 },
  { id: 10, name: "Steamed Chicken Momos", price: 130 },
  { id: 11, name: "Pasta Alfredo", price: 250 },
  { id: 12, name: "Chole Bhature", price: 140 },
  { id: 13, name: "Dal Makhani", price: 210 },
  { id: 14, name: "Veg Fried Rice", price: 150 },
  { id: 15, name: "Fish and Chips", price: 340 },
  { id: 16, name: "Chicken Caesar Salad", price: 220 },
  { id: 17, name: "Chocolate Brownie with Ice Cream", price: 160 },
  { id: 18, name: "Cold Coffee", price: 120 },
  { id: 19, name: "Gulab Jamun (2 pcs)", price: 70 },
  { id: 20, name: "Mango Lassi", price: 90 }
];

const addcart = [] ;
const VALID_TOKEN = "12345";

// Auth middleware passing errors via next()
app.use("/food", auth ) ; 

app.post("/food", (req, res, next) => {
  if (!req.body.name || !req.body.price) {
    const err = new Error("Name and price are required");
    err.statusCode = 400;
    return next(err);
  }

  const newItem = {
    id: foodItems.length + 1,
    name: req.body.name,
    price: req.body.price
  };

  foodItems.push(newItem);
  res.status(201).json({ message: "Item added successfully", item: newItem });
});

app.get("/food/:id", (req, res, next) => {
  const foodId = parseInt(req.params.id, 10);
  const food = foodItems.find((item) => item.id === foodId);

  if (!food) {
    const err = new Error(`Food item with ID ${foodId} not found`);
    err.statusCode = 404;
    return next(err);
  }

  res.json(food);
});

app.post("/addcart/:id" , (req , res)=>{
    const foodid = parseInt(req.params.id) ;
    const food = foodItems.find((item)=> item.id===foodid) ;

    if(food){
        addcart.push(food) ;
        res.send("added cart succesfully") ;
    }
    else {
        res.status(400).send("error founded !!") ;
    }
    console.log(addcart) ;
})

// Centralized Error-Handling Middleware (Must have all 4 parameters and sit after routes)
app.use((err, req, res, next) => {
  const status = err.statusCode || 500;
  res.status(status).json({
    success: false,
    status: status,
    message: err.message || "Internal Server Error"
  });
});



app.listen(4000, () => {
  console.log("Server is running on port 4000");
});