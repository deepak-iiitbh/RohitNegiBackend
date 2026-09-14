const auth  = (req, res, next) => {
  const enteredToken = "12345";

  if (enteredToken === VALID_TOKEN) {
    return next();
  }

  const err = new Error("Incorrect or missing token!");
  err.statusCode = 401;
  next(err); // Passing an argument to next() triggers the error-handling middleware
}

module.exports = {
    auth ,
}