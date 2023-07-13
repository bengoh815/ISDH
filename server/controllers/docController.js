const mongoose = require("mongoose");
const Doc = require("../models/docModel");

// GET all docs
const getDocs = async (req, res) => {
  const user_id = req.user._id;

  const docs = await Doc.find({ user_id }).sort({ expirationDate: -1 });
  res.status(200).json(docs);
};

// GET single doc
const getDoc = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such doc" });
  }

  const doc = await Doc.findById(id);

  if (!doc) {
    return res.status(404).json({ error: "No such doc" });
  }

  res.status(200).json(doc);
};

// POST a new doc
const createDoc = async (req, res) => {
  const { docName, type, expirationDate, status, notes } = req.body;

  let emptyFields = [];

  if (!docName) {
    emptyFields.push("docName");
  }
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill in all the fields", emptyFields });
  }

  // add to db
  try {
    const user_id = req.user._id;
    const doc = await Doc.create({
      docName,
      type,
      expirationDate,
      status,
      notes,
      user_id,
    });
    res.status(200).json(doc);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// DEL a new doc
const deleteDoc = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such doc" });
  }

  const doc = await Doc.findOneAndDelete({ _id: id });

  if (!doc) {
    return res.status(404).json({ error: "No such doc" });
  }

  res.status(200).json(doc);
};

// UPDATE a doc
const updateDoc = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such doc" });
  }

  const doc = await Doc.findOneAndUpdate({ _id: id }, { ...req.body });

  if (!doc) {
    return res.status(404).json({ error: "No such doc" });
  }

  res.status(200).json(doc);
};

module.exports = {
  getDocs,
  getDoc,
  createDoc,
  deleteDoc,
  updateDoc,
};
