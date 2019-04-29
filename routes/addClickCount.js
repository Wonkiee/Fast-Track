var express = require("express");
var router = express.Router();
var controller = require("../controller/addClickCount.controller");

router.post("/", controller.addClickCountController);
module.exports = router;
