const express = require("express");
const router = express.Router();
require("dotenv").config();


const authCtrl = require("./controllers/authController.js");



router.get("/auth/facebook", authCtrl.fbAuth);
router.get("/auth/facebook/callback", authCtrl.fbAuthCB);


module.exports = router;