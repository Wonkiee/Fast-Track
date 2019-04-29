var model = require("../models/model");

module.exports.getClickCountController = function(req, res) {
  model.getClickCountModel(function(clickCount) {
    if (clickCount != []) {
      res.setHeader("Content-Type", "application/json");
      res.status(200).send(JSON.stringify(clickCount));
    } else {
      res.sendState(404);
    }
  });
};
