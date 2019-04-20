var express = require("express");
var router = express.Router();
var controller = require("../controller/retrieveModels.controller");

router.get("/", controller.retrieveModelsController);

module.exports = router;
