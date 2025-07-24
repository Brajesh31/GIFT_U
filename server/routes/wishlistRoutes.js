const express = require("express");
const router = express.Router();
const Wishlist = require("../models/Wishlist");
const authMiddleware = require("../middleware/authMiddleware");

// ➤ Add to Wishlist
router.post("/add", authMiddleware, async (req, res) => {
    try {
        const { productId, name, image, price } = req.body;
        const userId = req.user.id;

        // Check if item already exists in wishlist
        const existingItem = await Wishlist.findOne({ userId, productId });
        if (existingItem) {
            return res.status(400).json({ message: "Item already in wishlist" });
        }

        const wishlistItem = new Wishlist({ userId, productId, name, image, price });
        await wishlistItem.save();
        res.status(201).json({ message: "Item added to wishlist", wishlistItem });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
});

// ➤ Get User Wishlist
router.get("/get", authMiddleware, async (req, res) => {
    try {
        const userId = req.user.id;
        const wishlist = await Wishlist.find({ userId });
        res.json(wishlist);
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
});

// ➤ Remove Item from Wishlist
router.delete("/remove/:id", authMiddleware, async (req, res) => {
    try {
        await Wishlist.findByIdAndDelete(req.params.id);
        res.json({ message: "Item removed from wishlist" });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
});

module.exports = router;

