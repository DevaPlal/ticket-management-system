const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

router.get("/auth/signin");
router.post("/auth/signin");
router.get("/auth/signup");
router.post("/auth/signup");
router.get("/auth/signout");


module.exports = router;



