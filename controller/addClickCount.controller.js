var model = require("../models/model");

//module.exports.addClickCountController = model.addClickCountModel;

module.exports.addClickCountController = function(req, res) {
  model.addClickCountModel(req, function(status) {
    res.sendStatus(status);
  });
};
