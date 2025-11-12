const express = require("express");

const router = express.Router();

const Note = require("../models/Note");
//create a note
router.post("/", async (req, res) => {
  try {
    const note = await Note.create(req.body);
    res.status(200).json(note);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

//get all notes

router.get("/", async (req, res) => {
  try {
    const notes = await Note.find();
    res.status(200).json(notes);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
/// get a singel note
router.get("/:id", async (req, res) => {
  try {
    const notes = await Note.findById(req.params.id);
    res.status(200).json(notes);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

///update the note
router.put("/:id", async (req, res) => {
  try {
    const notes = await Note.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(notes);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

//delete the note

router.delete("/:id", async (req, res) => {
  try {
    const notes = await Note.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: "Note deleted",
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
