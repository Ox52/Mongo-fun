const express = require("express");
const {
  getNotes,
  createNote,
  updateNote,
  deleteNote,
} = require("../controllers/notecontroller");
const { protect } = require("../middleware/authmiddleware");

const router = express.Router();

// 📝 Get all notes OR create a new note
router.route("/").get(protect, getNotes).post(protect, createNote);

// ✏️ Update or delete a specific note by ID
router.route("/:id").put(protect, updateNote).delete(protect, deleteNote);

module.exports = router;
