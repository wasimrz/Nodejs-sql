const hospitalCtrl = require("../controllers/hospitals");

const express = require("express");
const router = express.Router();

router.post("/", hospitalCtrl.createHospital);

module.exports = router;
