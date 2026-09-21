const mongoose = require('mongoose');

const { Schema } = mongoose;

const userschema = new Schema({
    name: {
        type: String,
        required : true
    },

    age: {
        type: Number,
        required: true ,
        min : 14 ,
        max : 88 
    },
    gender : {
        type : String ,
        required : true ,
        enum :['male' , 'female'] ,
        
    } ,
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
    },
    city: String,
    mobileno: Number,
    working: String
} , {timestamps : true });

const User = mongoose.model("User", userschema); //yha hamne basically connection banaya he

module.exports = User;