// getting-started.js
const mongoose = require('mongoose');


async function main() {
  await mongoose.connect('mongodb+srv://deepak240101266_db_user:seLrXhbJDw37aVB2@codingcamp.6xwbryw.mongodb.net/bhenchod');
  
  //model create krna matlab collection create krna aur collection , collection of bson files hoti he

//   const user = mongoose.model("user" , userschema) ;
//   const small = new user({name : "deepak" , age : 15}) ;
//   await small.save() ;

//   await user.create({name : "rampal" , age : 54}) ;

//   await user.insertMany([{
//     name : "akash" ,
//     age : 45 ,
//     gender : "male"
//   },{
//     name : "vineet" ,
//     age : 21 ,
//     citr : "anand vihar terminal" 
//   }])
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
module.exports = main ;