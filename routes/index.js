const express = require("express");
const { sampleFunction } = require("../controller/sampleController");

const router = express.Router();

router.get("/", sampleFunction);

module.exports = router;
