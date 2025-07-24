// const mongoose = require('mongoose');

// const productSchema = new mongoose.Schema({
//   name: String,
//   description: String,
//   price: Number,
//   category: String,
//   image: String,
//   extraimage: String,
//   gender: [String],
//   age: [String],
//   occasion: [String],
// });

// module.exports = mongoose.model('Product', productSchema);


const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  category: String,
  image: String,
  extraimage: String,
  gender: [String],
  age: [String],
  occasion: [String],
  addedBy: {
    type: String,
    enum:['admin', 'user','seller','moderator'],
    default: 'user'
  }
});

module.exports = mongoose.model("Product", productSchema);
