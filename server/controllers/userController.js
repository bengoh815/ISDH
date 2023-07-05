const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const { default: jwtDecode } = require("jwt-decode");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);

    // create token
    const token = createToken(user._id);

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// signup user
const signupUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = await User.signup(name, email, password);

    // create token
    const token = createToken(user._id);

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// google signin user
const googleSigninUser = async (req, res) => {
  const { googleToken } = req.body;
  const decoded = jwtDecode(googleToken);
  const name = { firstName: decoded.given_name, lastName: decoded.family_name };
  const email = decoded.email;
  const verified = decoded.email_verified;

  try {
    const user = await User.googleSignin(name, email, verified);

    // create token
    const token = createToken(user._id);

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { loginUser, signupUser, googleSigninUser };
