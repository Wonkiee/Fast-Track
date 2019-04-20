"use strict";

var dataHandle = new DataHandle();

function displayNavBar() {
  dataHandle.insertBrandsToList().then(function(data) {
    for (var i = 0; i < 10; i++) {
      var index = i + 1;
      document.getElementById("heading_" + index).innerHTML = data[i].slice(
        1,
        -1
      );
    }
  });
}

function displayPhoneDetails() {
  dataHandle.retrievePhoneDetails().then(function(data) {
    var index;

    for (var i = 0; i < 10; i++) {
      index = i + 1;
      var id = "item_" + index; //Setting data on the Divs

      document.getElementById(id).innerHTML = data[i][1] + " " + data[i][2]; //Setting the name of the Div to the ID of phone models

      document.getElementById(id).setAttribute("name", data[i][0]);
    } //Display Images on the Web Page

    setImgSrc();
  });
}

function clickCount(id) {
  var phoneModelId = document.getElementById(id).getAttribute("name");
  dataHandle.recordClickCount(phoneModelId);
  dataHandle.getClickCount();
}

var findPhoneModelDetails = function findPhoneModelDetails(modelId) {
  for (var i = 0; i < Object.keys(dataHandle.phoneDetails).length; i++) {
    if (dataHandle.phoneDetails[i][0] == modelId) {
      var phoneData =
        "Brand: " +
        dataHandle.phoneDetails[i][1] +
        "\n" +
        "Model: " +
        dataHandle.phoneDetails[i][2] +
        "\n" +
        " Price: " +
        dataHandle.phoneDetails[i][3];
      return phoneData;
    }
  }
};

function hoverTextDisplay(id) {
  var id_ = "item_" + id;
  var phoneModelId = document.getElementById(id_).getAttribute("name");
  document.getElementById(id).innerHTML = findPhoneModelDetails(phoneModelId);
}

function displayMostPopularPhones(ids) {
  document.getElementById("mostPopularPhones").innerHTML =
    findPhoneModelDetails(ids[0]) +
    "<p/>" +
    findPhoneModelDetails(ids[1]) +
    "<p/>" +
    findPhoneModelDetails(ids[2]);
}

function setImgSrc() {
  for (var i = 0; i < 10; i++) {
    var phoneModelId = document
      .getElementById("item_" + (i + 1))
      .getAttribute("name");
    var image = document.getElementById("itm_" + (i + 1));
    image.src = "../images/" + phoneModelId + ".png"; //image.src = "../images/default.png";
  }
}
