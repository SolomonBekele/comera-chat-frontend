import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./src/routes/auth.routes.js";
import messageRoutes from "./src/routes/message.routes.js";
import userRoutes from "./src/routes/user.routes.js";

import path from "path";
import connectToMongoDB from "./src/db/connectToMongoDb.js";

// Load environment variables
dotenv.config();

const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Middleware
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

// 404 handler (for any route not matched above)
app.use((req, res, next) => {
  console.log(`404 Not Found: ${req.originalUrl}`);
  res.status(404).json({ message: "Route not found" });
});

// Connect to MongoDB and start server
connectToMongoDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });
