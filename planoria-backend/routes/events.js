const express = require("express");
const router = express.Router();
const Event = require("../models/Event");
const auth = require("../middleware/auth");

// CREATE EVENT
router.post("/", auth, async (req, res) => {
  try {
    const { title, description, date } = req.body;

    const event = new Event({
      title,
      description,
      date,
      user: req.user.id,
    });

    await event.save();
    res.json(event);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET EVENTS (user)
router.get("/", auth, async (req, res) => {
  try {
    const events = await Event.find({ user: req.user.id });
    res.json(events);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE EVENT
router.delete("/:id", auth, async (req, res) => {
  try {
    await Event.findByIdAndDelete(req.params.id);
    res.json("Event supprimé");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;