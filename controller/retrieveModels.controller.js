var model = require("../models/model");

//module.exports.retrieveModelsController = model.retrieveModelsModel;
module.exports.retrieveModelsController = function(req, res) {
  model.retrieveModelsModel(function(models) {
    if (models == []) {
      res.sendStatus(404);
      return;
    }
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify(models));
  });
};
