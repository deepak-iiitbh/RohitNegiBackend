const mongoose = require('mongoose');

const { Schema } = mongoose;

const userschema = new Schema({
    
    Email : {
        type : String ,
        required : true ,
        unique : true ,
        trim : true 
    } ,
    password : {
        required : true ,
        trim : true ,
        type : String 
    }
} , {timestamps : true });

const User = mongoose.model("User", userschema); //yha hamne basically connection banaya he

module.exports = User;