var express = require("express");
var router = express.Router();
var controller = require("../controller/getClickCount.controller");

router.get("/", controller.getClickCountController);

module.exports = router;
