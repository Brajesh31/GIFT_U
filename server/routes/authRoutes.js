const express = require("express");
const router = express.Router();
const { loginUser, registerUser } = require("../controllers/authController"); // Import controllers

// Debugging: Check if loginUser and registerUser are properly imported
console.log("loginUser:", loginUser); 
console.log("registerUser:", registerUser);
console.log("🔹 Auth routes are being initialized");

// Signup Route
router.post("/signup", registerUser);


// Login Route
router.post("/login", loginUser);

module.exports = router;
