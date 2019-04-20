"use strict";

var dataHandle = new DataHandle();

// function displayNavBar() {
//   dataHandle.insertBrandsToList().then(function(data) {
//     for (var i = 0; i < 10; i++) {
//       var index = i + 1;
//       document.getElementById("heading_" + index).innerHTML = data[i].slice(
//         1,
//         -1
//       );
//     }
//   });
// }

// function displayPhoneDetails() {
//   dataHandle.retrievePhoneDetails().then(function(data) {
//     var index;

//     for (var i = 0; i < 10; i++) {
//       index = i + 1;
//       id = "item_" + index; //Setting data on the Divs

//       document.getElementById(id).innerHTML = data[i][1] + " " + data[i][2]; //Setting the name of the Div to the ID of phone models

//       document.getElementById(id).setAttribute("name", data[i][0]);
//     }
//   });
// }

function clickCount(id) {
  var phoneModelId = document.getElementById(id).getAttribute("name");
  dataHandle.recordClickCount(phoneModelId);
  //dataHandle.getClickCount();
}

function hoverTextDisplay(id) {
  var id_ = "item_" + id;
  var phoneModelId = document.getElementById(id_).getAttribute("name");
  document.getElementById(id).innerHTML = dataHandle.findPhoneModelDetails(
    phoneModelId
  );
  console.log("asdas", dataHandle.findPhoneModelDetails(phoneModelId));
}
