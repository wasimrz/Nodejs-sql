const userCtrl = require("../controllers/users");

const express = require("express");
const router = express.Router();

router.post("/", userCtrl.createuser);
router.post("/userProfile", userCtrl.createuserProfile);
router.get("/userProfile", userCtrl.getuserProfiles);

module.exports = router;
