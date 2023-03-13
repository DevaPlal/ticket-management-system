const express = require("express");

const router = express.Router();

const parkingController = require("../controllers/parkingController");


router.get("/user/parking-slots",parkingController.parkingIndex);
router.post("/admmin/parking-slots",parkingController.parkingCreate);
router.get("/user/parking-slots/:id",parkingController.parkingShow);
router.get("/user/parking-slots/book/:id",parkingController.parkingShow);


module.exports = router;