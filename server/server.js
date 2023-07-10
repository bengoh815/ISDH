require("dotenv").config();
const PORT = process.env.SERVER_PORT;

// app
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

// imports
const userRoutes = require("./routes/users");

// middlewares
app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.status(200).json("receiving loud and clear");
});
app.use("/api/user", userRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`);
    });
  })
  .catch((error) => console.log(error));
