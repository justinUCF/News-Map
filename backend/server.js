import mongoose from "mongoose";
import dotenv from "dotenv";
import express from "express";

// Reads from .env and assigns key value pairs
dotenv.config();

// Create express instance
const app = express();

// JSON parsing
app.use(express.json());

// Test route to confirm API is working
app.get("/test", (req, res) => {
    res.json({ message: "Hello from backend!" });
});

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Atlas connected"))
.catch(err => console.error(err));

// Use your PORT from .env with fallback
const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});


