var model = require("../models/model");

module.exports.addClickCountController = function(req, res) {
  model.addClickCountModel(req, function(status) {
    res.sendStatus(status);
  });
};
