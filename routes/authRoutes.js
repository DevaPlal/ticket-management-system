const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

router.get("/auth/signin",authController.userSigninGet);
router.get("/auth/signup",authController.userSignupGet);
router.post("/auth/signin",authController.userSigninPost);
router.post("/auth/signup",authController.userSignupPost);
router.get("/auth/signout",authController.userLogoutGet);


module.exports = router;



