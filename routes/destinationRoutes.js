const express = require("express");

const router = express.Router();

const destinationController = require("../controllers/destinationController");
const { requireAuth } = require("../middleware/authMiddleware");

router.get("/destinations",destinationController.destinationIndexGet);
router.get("/user/destinations",destinationController.destinationIndex);
router.post("/admin/destinations",destinationController.destinationCreate);
router.get("/user/destinations/:id",destinationController.destinationShow);



module.exports = router;