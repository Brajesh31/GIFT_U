const express = require('express');
const Gift = require('../models/gifts');
const router = express.Router();

router.get('/filter', async (req, res) => {
  try {
    const { gender, age, occasion, budget } = req.query;

    let filter = {};

    // Convert to array if not already
    if (gender) {
      filter.gender = { $in: Array.isArray(gender) ? gender : [gender] };
    }
    if (age) {
      filter.age = { $in: Array.isArray(age) ? age : [age] };
    }
    if (occasion) {
      filter.occasion = { $in: Array.isArray(occasion) ? occasion : [occasion] };
    }
    if (budget) {
      filter.price = { $lte: Number(budget) };
    }

    const gifts = await Gift.find(filter);
    res.json(gifts);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching gifts', error });
  }
});

module.exports = router;
