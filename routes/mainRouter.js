var express = require("express");
var router = express.Router();

var homePageRouter = require("./homePage");
var retrieveBrandsRouter = require("./retrieveBrands");
var retrieveModelsRouter = require("./retrieveModels");
var addClickCountRouter = require("./addClickCount");
var getClickCountRouter = require("./getClickCount");

// router.get("/", function(req, res, next) {
//   //Get information from sessions
//   req.session.page_views++;
//   console.log(
//     "Number of times the client visited the page:",
//     req.session.page_views
//   );

//   //set cookie for future use
//   res.cookie("name", "rajitha", { expire: 360000 + Date.now() });
//   res.sendFile(
//     "/home/rajithar/Desktop/FastTrackNew/myapp/public/html/homePage.html"
//   );
// });

router.use("/", homePageRouter);
router.use("/retrievebrands", retrieveBrandsRouter);
router.use("/retrievemodels", retrieveModelsRouter);
router.use("/clickcount", addClickCountRouter);
router.use("/getclickcount", getClickCountRouter);

module.exports = router;
