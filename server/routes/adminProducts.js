const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// ✅ GET all products (including admin-added)
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    console.error("❌ Error fetching products:", err);
    res.status(500).json({ message: 'Failed to fetch products' });
  }
});

// ✅ ADD new product (default addedBy = admin)
router.post('/', async (req, res) => {
  try {
    const productData = {
      ...req.body,
      addedBy: "admin"
    };

    const newProduct = new Product(productData);
    await newProduct.save();

    res.status(201).json(newProduct);
  } catch (err) {
    console.error("❌ Error adding product:", err);
    res.status(500).json({ error: err.message });
  }
});

// ✅ NEW: GET single product by ID
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json(product);
  } catch (err) {
    console.error("❌ Error fetching product by ID:", err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
