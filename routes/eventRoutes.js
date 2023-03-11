const express = require("express");

const router = express.Router();

const eventController = require("../controllers/eventController");

router.get("/events",eventController.eventIndex);
router.get("/events/:id",eventController.eventShow);

module.exports = router;