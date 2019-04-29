var retrieveBrandsDAO = require("../dao/MySQL/retrieveBrands");
var retrieveModelsDAO = require("../dao/MySQL/retrieveModels");
var addClickCountDAO = require("../dao/redis/addClickCount");
var getClickCountDAO = require("../dao/redis/getClickCount");

module.exports.retrieveBrandsModel = function(sendBrandNames) {
  retrieveBrandsDAO.retrieveBrands(function(rows) {
    if (rows == []) {
      sendBrandNames([]);
      return;
    } else {
      var brandNames = [];
      for (var i = 0; i < rows.length; i++) {
        brandNames[i] = rows[i].brand_name;
      }
      sendBrandNames(brandNames);
      return brandNames;
    }
  });
};

module.exports.retrieveModelsModel = function(sendPhoneModels) {
  retrieveModelsDAO.retrieveModels(function(rows) {
    if (rows == []) {
      sendPhoneModels([]);
      return;
    }
    var phoneModels = [];
    for (var i = 0; i < rows.length; i++) {
      phoneModels[i] = [
        rows[i].id,
        rows[i].brand,
        rows[i].model,
        rows[i].price
      ];
    }
    sendPhoneModels(phoneModels);
    return;
  });
};

module.exports.addClickCountModel = function(req, callback) {
  let success = addClickCountDAO.addClickCount(req.body.id);
  if (success) callback(200);
  else callback(404);
  return;
};

let storeData = [];
module.exports.getClickCountModel = function(sendClickCount) {
  var promise = getClickCountDAO.getKeys();
  promise
    .then(function(keys) {
      let valuePromise;
      for (let i = 0; i < keys.length; i++) {
        valuePromise = getClickCountDAO.getClickCount(keys[i]);
        valuePromise.then(function(value) {
          fillValue(i, value, keys, sendClickCount);
        });
      }
    })
    .catch(error => {
      sendClickCount([]);
    });
};

function fillValue(i, val, keys, sendClickCount) {
  storeData[i] = val;

  if (i == keys.length - 1) {
    storeData = storeData.map(Number); //convert the String array into an array on Integers
    let arrOfId = [],
      maxOfArray_id;
    for (let i = 0; i < 3; i++) {
      maxOfArray_id = storeData.indexOf(Math.max.apply(null, storeData));
      arrOfId[i] = maxOfArray_id;
      storeData[maxOfArray_id] = -1;
    }
    sendClickCount(arrOfId);
  }
}
