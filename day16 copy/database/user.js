const mongoose = require('mongoose');

const { Schema } = mongoose;

const userschema = new Schema({
    name: {
        type: String,
        required: true
    },

    age: {
        type: Number,
        required: true
    },

    city: String,
    mobileno: Number,
    working: String
});

const User = mongoose.model("User", userschema);

module.exports = User;