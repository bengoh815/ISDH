const express = require("express");

// controllers
const {
  loginUser,
  signupUser,
  googleSigninUser,
  verifyUser,
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

// verify
router.get("/:id/verify/:token", verifyUser);

module.exports = router;
