import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./routes/users.js";
import claimRoutes from "./routes/claims.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware

app.use(
  cors({
    origin: "https://leader-task.netlify.app", //frontend URL
    methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
    credentials: true, // Allow cookies (if needed)
  })
);
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/claims", claimRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the Leaderboard API!");  
});

// Start server
connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});