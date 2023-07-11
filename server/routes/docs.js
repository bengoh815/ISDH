const express = require("express");
const {
  getDocs,
  getDoc,
  createDoc,
  deleteDoc,
  updateDoc,
} = require("../controllers/docController");
const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

// require auth for all doc routes
router.use(requireAuth);

// GET all docs
router.get("/", getDocs);

// GET single doc
router.get("/:id", getDoc);

// POST a new doc
router.post("/", createDoc);

// DEL a new doc
router.delete("/:id", deleteDoc);

// UPDATE a doc
router.patch("/:id", updateDoc);

module.exports = router;
