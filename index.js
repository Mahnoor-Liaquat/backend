require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const products_routes = require("./routes/products");
const connectDb = require("./db/connect");

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Welcome");
});

// Adding middleware to set routers
app.use("/api/products", products_routes);


const start = async () => {
  try {
    console.log('Starting server...');
    await connectDb(process.env.MONGO);
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Error starting the server:', error);
  }
};

start();