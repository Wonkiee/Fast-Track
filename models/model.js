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

module.exports.addClickCountModel = function(req, sendStatus) {
  addClickCountDAO.addClickCount(req.body.id);
  sendStatus(200);
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
    .then(function() {});
};

function fillValue(i, val, keys, sendClickCount) {
  storeData[i] = val;

  if (i == keys.length - 1) {
    storeData = storeData.map(Number);
    let maxClickCount_id = storeData.indexOf(Math.max.apply(null, storeData)); // get the max of the array
    let secondMaxClickCount_id = maxClicks();
    if (secondMaxClickCount_id > maxClickCount_id) secondMaxClickCount_id++;
    let thirdMaxClickCount_id = maxClicks();
    if (thirdMaxClickCount_id > maxClickCount_id) thirdMaxClickCount_id++;
    if (thirdMaxClickCount_id > secondMaxClickCount_id) thirdMaxClickCount_id++;
    let arrOfId = [
      keys[maxClickCount_id],
      keys[secondMaxClickCount_id],
      keys[thirdMaxClickCount_id]
    ];
    sendClickCount(arrOfId);
  }
}

function maxClicks() {
  var max = Number(Math.max.apply(null, storeData)); // get the max of the array
  storeData.splice(storeData.indexOf(max), 1); // remove max from the array
  return storeData.indexOf(Math.max.apply(null, storeData)); // get the 2nd max
}
