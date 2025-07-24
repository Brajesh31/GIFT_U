const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();

// Middleware
const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173";
app.use(cors({ origin: FRONTEND_URL, credentials: true }));
app.use(express.json());

// Import Routes
const authRoutes = require("./routes/authRoutes");
const wishlistRoutes = require("./routes/wishlistRoutes");
const giftRoutes = require("./routes/gifts");
const adminProductRoutes = require("./routes/adminProducts");
const adminAuthRoutes = require('./routes/adminAuth');
// const productRoutes = require("./routes/products");

// Use Routes
app.use("/api/auth", authRoutes);
app.use("/api/wishlist", wishlistRoutes);
app.use("/api/gifts", giftRoutes); 
app.use("/api/admin/products", adminProductRoutes);
app.use('/api/admin', adminAuthRoutes);
// app.use("/api/gifts", require("./routes/gifts"));

const productRoutes = require("./routes/products");
app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the Gift API!");
});

// // Temporary GET route to confirm it's working
// router.get('/', (req, res) => {
//   res.send('Admin Product Routes Working');
// });

console.log("✅ Auth routes loaded: /api/auth");
console.log("✅ Wishlist routes loaded: /api/wishlist");
console.log("✅ Gifts routes loaded: /api/gifts");

// MongoDB Connection (Fixed)
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB Connected");
  } catch (err) {
    console.error("❌ MongoDB Connection Error:", err.message);
    process.exit(1);
  }
};

connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

