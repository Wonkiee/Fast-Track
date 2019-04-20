var express = require("express");
var router = express.Router();
var cache = require("express-redis-cache")({ expire: 60 });

/* GET home page. */
router.get("/", cache.route({ name: "home", type: "text/plain" }), function(
  req,
  res
) {
  //Get information from sessions
  req.session.page_views++;
  // console.log(
  //   "Number of times the client visited the page:",
  //   req.session.page_views
  // );

  //set cookie for future use
  res.cookie("name", "home", { expire: 360000 + Date.now() });
  res.sendFile(
    "/home/rajithar/Desktop/FastTrackNew/myapp/public/html/homePage.html"
  );
});

module.exports = router;
