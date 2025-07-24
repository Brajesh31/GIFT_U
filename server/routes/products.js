const express = require("express");
const router = express.Router();
const Product = require("../models/Product"); // Adjust if your path is different

// GET /api/products/filter
router.get("/filter", async (req, res) => {
  try {
    const { gender, age, occasion, budget } = req.query;

    const filter = {};
    if (gender) filter.gender = gender;
    if (age) filter.age = age;
    if (occasion) filter.occasion = occasion;
    if (budget) filter.price = { $lte: Number(budget) };

    const products = await Product.find(filter);
    res.status(200).json(products);
  } catch (error) {
    console.error("Error filtering products:", error);
    res.status(500).json({ message: "Server error while filtering products." });
  }
});

module.exports = router;
