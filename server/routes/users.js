const express = require("express");

// controllers
const {} = require("../controllers/userController");

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
