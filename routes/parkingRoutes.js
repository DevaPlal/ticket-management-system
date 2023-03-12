const express = require("express");

const router = express.Router();

const parkingController = require("../controllers/parkingController");


router.get("/parking-slots",parkingController.parkingIndex);
router.post("/parking-slots",parkingController.parkingCreate);
router.get("/parking-slots/:id",parkingController.parkingShow);

module.exports = router;