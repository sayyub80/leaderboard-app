import express from "express";
import User from "../models/User.js";

const router = express.Router();



// Get top 10 users (for leaderboard)
router.get("/top", async (req, res) => {
  try {
    const users = await User.find().sort({ totalPoints: -1 }).limit(10); // Only top 10
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// Get all users (for dropdown)
router.get("/all", async (req, res) => {
  try {
    const users = await User.find().sort({ name: 1 }); // All users, sorted by name
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// Add a new user
router.post("/", async (req, res) => {
  try {
    const { name } = req.body;
    const newUser = await User.create({ name });
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ error: "Invalid data" });
  }
});

export default router;