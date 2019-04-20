var model = require("../models/model");

//module.exports.getClickCountController = model.getClickCountModel;

module.exports.getClickCountController = function(req, res) {
  model.getClickCountModel(function(clickCount) {
    res.setHeader("Content-Type", "application/json");
    res.status(200).send(JSON.stringify(clickCount));
  });
};
