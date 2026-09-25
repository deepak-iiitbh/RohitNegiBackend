const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { Schema } = mongoose;

const userschema = new Schema({
    Email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    }
});

userschema.methods.verifypass = async function (userpassword) {
    return await bcrypt.compare(userpassword, this.password);
};

userschema.methods.getJwt = function () {
    return jwt.sign(
        {
            _id: this._id,
            Email: this.Email
        },
        process.env.KEYEN,
        {
            expiresIn: 100
        }
    );
};

const User = mongoose.model("User", userschema);

module.exports = User;