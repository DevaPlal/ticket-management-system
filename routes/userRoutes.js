const express = require("express");

const router = express.Router();

const userController = require("../controllers/userController");

router.get("/user/profile/:id",userController.index);
router.get("/user/ticket-bookings",userController.ticketBookings);


module.exports = router;