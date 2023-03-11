const express = require("express");

const router = express.Router();

const genericController = require("../controllers/genericController");

router.get("/",genericController.index);

module.exports = router;