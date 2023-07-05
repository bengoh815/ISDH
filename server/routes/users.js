const express = require("express");

// controllers
const {
  loginUser,
  signupUser,
  googleSigninUser,
} = require("../controllers/userController");

/* 
user routes
*/
const router = express.Router();

// login
router.post("/login", loginUser);

// signup
router.post("/signup", signupUser);

// google signin
router.post("/googlesignin", googleSigninUser);

module.exports = router;
