var express = require("express");
var router = express.Router();
var controller = require("../controller/retrieveBrands.controller");

router.get("/", controller.retrieveBrandsController);
module.exports = router;
