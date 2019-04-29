var express = require("express");
var router = express.Router();

var homePageRouter = require("./homePage");
var retrieveBrandsRouter = require("./retrieveBrands");
var retrieveModelsRouter = require("./retrieveModels");
var addClickCountRouter = require("./addClickCount");
var getClickCountRouter = require("./getClickCount");

router.use("/", homePageRouter);
router.use("/retrievebrands", retrieveBrandsRouter);
router.use("/retrievemodels", retrieveModelsRouter);
router.use("/clickcount", addClickCountRouter);
router.use("/getclickcount", getClickCountRouter);

module.exports = router;
