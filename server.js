import express from "express";
import { json } from "express"; // Correct import for middleware
import sequelize from "./models/index.js"; // Ensure correct file path
import dotenv from "dotenv"; 

dotenv.config(); // Load environment variables

const app = express();

// Middleware
app.use(json());

// Test Database Connection
sequelize.authenticate()
  .then(() => console.log("✅ MySQL Database Connected Successfully!"))
  .catch(err => console.error("❌ MySQL Connection Failed", err));

// Default Route
app.get("/", (req, res) => {
  res.send("Library Management System API is Running...");
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});


console.log("Loaded ENV:", process.env.DB_HOST);
