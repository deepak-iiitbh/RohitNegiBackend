// getting-started.js
const mongoose = require('mongoose');


async function main() {
  await mongoose.connect(process.env.MONGODBURI);
  
}
module.exports = main ;