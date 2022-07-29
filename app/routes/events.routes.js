const express = require("express");

const { getAllEvents } = require("../models/events.model");

const router = express.Router();

router.get("/events", async (req, res) => {
  const allEvents = await getAllEvents();
  res.json({
    success: true,
    message: "events found",
    payload: allEvents,
  });
  return;
});

module.exports = router;
