const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth");
require("dotenv").config();

// All required Middlewares
app.use(cors());
app.use(express.json());

// Cross origin Configurations for local and deployed
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://lecture-scheduling-module.netlify.app",
    ],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);

// MongoDB Connection config
const mongoURI = process.env.MONGODB_URI;

mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("DB Connection Successful");
  })
  .catch((err) => {
    console.error("DB Connection Error:", err);
    process.exit(1);
  });

// All Api Routes
app.use("/api/auth", authRoutes);

// Server configuration
const port = process.env.PORT || 4000;
const host = process.env.HOST || "0.0.0.0";

app.listen(port, host, () => {
  console.log(`Server started on port ${port}`);
});
