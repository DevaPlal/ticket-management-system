const express = require("express");

const router = express.Router();

const eventController = require("../controllers/eventController");

router.get("/user/events", eventController.eventIndex);
router.get("/user/events/checkout/:id", eventController.eventCheckoutGet);
router.post("/user/events/checkout/", eventController.eventCheckoutPost);
router.get("/user/events/:id", eventController.eventShow);
router.get("/admin/create-event", eventController.eventCreateGet);
router.post("/admin/create-event", eventController.eventCreatePost);
router.get("/admin/update-event/:id", eventController.eventUpdateGet);
router.post("/admin/update-event", eventController.eventUpdatePost);
router.get("/admin/delete-event/:id", eventController.eventDelete);

module.exports = router;



