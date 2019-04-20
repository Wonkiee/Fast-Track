var model = require("../models/model");

//module.exports.retrieveBrandsController = model.retrieveBrandsModel;
module.exports.retrieveBrandsController = function(req, res) {
  model.retrieveBrandsModel(function(brandNames) {
    if (brandNames == []) {
      res.sendStatus(404);
      return;
    }
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify(brandNames));
  });
};
