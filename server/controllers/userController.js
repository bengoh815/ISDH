const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const Token = require("../models/tokenModel");
const sendEmail = require("../utils/sendEmail");

const { default: jwtDecode } = require("jwt-decode");

const createJWTToken = (_id) => {
  return jwt.sign({ _id }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);

    if (!user.verified) {
      // user not verified
      // check if verify token exists
      const exist = await Token.findOne({ userId: user._id });

      if (!exist) {
        // token does not exist
        // create new token
        const verifyToken = await Token.createVerifyToken(user._id);

        const emailSubject = "Verify Your Email";
        const url = `http://localhost:3000/users/${user._id}/verify/${verifyToken.token}`;
        const emailBody = `Please verify your email with this link ${url}`;

        await sendEmail(user.email, emailSubject, emailBody);

        return res
          .status(400)
          .json({ message: "An Email sent to your account please verify" });
      }

      return res.status(400).json({ message: "Please verify your account" });
    }

    // create jwtToken
    const jwtToken = createJWTToken(user._id);

    res.status(200).json({ email, jwtToken });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// signup user
const signupUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = await User.signup(name, email, password);

    const verifyToken = await Token.createVerifyToken(user._id);

    const emailSubject = "Verify Your Email";
    const url = `http://localhost:3000/users/${user._id}/verify/${verifyToken.token}`;
    const emailBody = `Please verify your email with this link ${url}`;

    await sendEmail(user.email, emailSubject, emailBody);

    res
      .status(201)
      .json({ message: "An Email sent to your account please verify" });
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

    // create jwtToken
    const jwtToken = createJWTToken(user._id);

    res.status(200).json({ email, jwtToken });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// verify user
const verifyUser = async (req, res) => {};

module.exports = { loginUser, signupUser, googleSigninUser, verifyUser };
