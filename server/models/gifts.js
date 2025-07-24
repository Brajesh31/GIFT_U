const mongoose = require("mongoose");

const GiftSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  gender: { type: String, enum: ["Male", "Female", "Them", "Unisex"], required: true },
  age: { type: String, enum: ["Kids", "Teen", "Adult", "Senior"], required: true },
  occasion: { type: String, required: true },
  imageUrl: { type: String },
});

const Gift = mongoose.model("Gift", GiftSchema);
module.exports = Gift;

