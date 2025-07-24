const mongoose = require("mongoose");

const WishlistSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    productId: { type: String, required: true },
    name: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model("Wishlist", WishlistSchema);
