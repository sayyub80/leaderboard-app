import express from "express";
import User from "../models/User.js";
import PointsHistory from "../models/PointsHistory.js";

const router = express.Router();

// Claim random points (1-10)
router.post("/", async (req, res) => {
  try {
    const { userId } = req.body;
    const points = Math.floor(Math.random() * 10) + 1;

    await User.findByIdAndUpdate(userId, { $inc: { totalPoints: points } });
    await PointsHistory.create({ userId, points });

    res.json({ success: true, points });
  } catch (err) {
    res.status(500).json({ error: "Claim failed" });
  }
});

// Get claim history
router.get("/history", async (req, res) => {
  try {
    const history = await PointsHistory.find().populate("userId");
    res.json(history);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

export default router;