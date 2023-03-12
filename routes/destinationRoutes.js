const express = require("express");

const router = express.Router();

const destinationController = require("../controllers/destinationController");
const { requireAuth } = require("../middleware/authMiddleware");


router.get("/destinations",destinationController.destinationIndex);
router.post("/destinations",destinationController.destinationCreate);
router.get("/destinations/:id",destinationController.destinationShow);



module.exports = router;