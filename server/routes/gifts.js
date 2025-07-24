const express = require('express');
const Gift = require('../models/gifts'); // Make sure this model has gender/age/occasion as arrays
const router = express.Router();

router.get('/filter', async (req, res) => {
  try {
    const { gender, age, occasion, budget } = req.query;

    let filter = {};

    if (gender) {
      const genderArray = Array.isArray(gender) ? gender : [gender];
      filter.gender = { $in: genderArray };
    }

    if (age) {
      const ageArray = Array.isArray(age) ? age : [age];
      filter.age = { $in: ageArray };
    }

    if (occasion) {
      const occasionArray = Array.isArray(occasion) ? occasion : [occasion];
      filter.occasion = { $in: occasionArray };
    }

    if (budget) {
      filter.price = { $lte: Number(budget) };
    }

    const gifts = await Gift.find(filter);
    res.json(gifts);
  } catch (error) {
    console.error("Error filtering gifts:", error);
    res.status(500).json({ message: 'Error fetching gifts', error });
  }
});

module.exports = router;


