require("dotenv").config();
const PORT = process.env.SERVER_PORT;

// app
const express = require("express");
const app = express();

// imports
const userRoutes = require("./routes/users");

// middlewares
app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.status(200).json("ok");
});
app.get("/api/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
