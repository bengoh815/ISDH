require("dotenv").config();
const PORT = process.env.SERVER_PORT;

// app
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const mongoose = require("mongoose");
const app = express();

// imports
const userRoutes = require("./routes/users");
const docRoutes = require("./routes/docs");

// middlewares
app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.status(200).json("receiving loud and clear");
});
app.get("/sendemail", async (req, res) => {
  const transporter = nodemailer.createTransport({
    service: process.env.SERVICE,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_APP_PASS,
    },
  });

  const option = {
    from: process.env.EMAIL,
    to: "bengoh815@gmail.com",
    subject: "try",
    text: "smtg not imporant",
  };

  transporter.sendMail(option, function (error, info) {
    if (error) {
      console.log(error, "nodemail error");
    } else {
      console.log("Mail sent", info);
    }
  });
});
app.use("/api/user", userRoutes);
app.use("/api/doc", docRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`);
    });
  })
  .catch((error) => console.log(error));
