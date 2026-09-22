const validator = require("validator");

function validateuser(body) {

    if (!validator.isEmail(body.Email)) {
        throw new Error("Please enter a valid email");
    }

    if (!validator.isStrongPassword(body.password)) {
        throw new Error("Password should be strong");
    }
}

module.exports = validateuser;