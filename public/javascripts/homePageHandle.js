let dataHandle = new DataHandle();

//function displayNavBar() {
let displayNavBar = () => {
  dataHandle.insertBrandsToList().then(data => {
    for (let i = 0; i < 10; i++) {
      let index = i + 1;
      document.getElementById("heading_" + index).innerHTML = data[i].slice(
        1,
        -1
      );
    }
  });
};

//function displayPhoneDetails() {
let displayPhoneDetails = () => {
  dataHandle.retrievePhoneDetails().then(data => {
    let index;
    for (let i = 0; i < 10; i++) {
      index = i + 1;
      let id = "item_" + index;
      //Setting data on the Divs
      document.getElementById(id).innerHTML = data[i][1] + " " + data[i][2];
      //Setting the name of the Div to the ID of phone models
      document.getElementById(id).setAttribute("name", data[i][0]);
    }
    //Display Images on the Web Page
    setImgSrc();
  });
};

//function clickCount(id) {
let clickCount = id => {
  let phoneModelId = document.getElementById(id).getAttribute("name");
  dataHandle.recordClickCount(phoneModelId);
  dataHandle.getClickCount();
};

let findPhoneModelDetails = modelId => {
  for (let i = 0; i < Object.keys(phoneDetails).length; i++) {
    if (phoneDetails[i][0] == modelId) {
      let phoneData =
        "Brand: " +
        phoneDetails[i][1] +
        "\n" +
        "Model: " +
        phoneDetails[i][2] +
        "\n" +
        " Price: " +
        phoneDetails[i][3];
      return phoneData;
    }
  }
};

//function hoverTextDisplay(id) {
let hoverTextDisplay = id => {
  let id_ = "item_" + id;
  //get the id of the phone stored in teh div which the user hovered
  let phoneModelId = document.getElementById(id_).getAttribute("name");
  //set values to the tool tip
  document.getElementById(id).innerHTML = findPhoneModelDetails(phoneModelId);
};

//function displayMostPopularPhones(ids) {
let displayMostPopularPhones = ids => {
  document.getElementById("mostPopularPhones").innerHTML =
    findPhoneModelDetails(ids[0]) +
    "<p/>" +
    findPhoneModelDetails(ids[1]) +
    "<p/>" +
    findPhoneModelDetails(ids[2]);
};

//function setImgSrc() {
let setImgSrc = () => {
  for (let i = 0; i < 10; i++) {
    //get the phone model id from the div
    let phoneModelId = document
      .getElementById("item_" + (i + 1))
      .getAttribute("name");

    //get reference to the image
    var image = document.getElementById("itm_" + (i + 1));

    //set image source attribute using the phone model id
    image.src = "../images/" + phoneModelId + ".png";

    //image.src = "../images/default.png";
  }
};

///////////////////////////////////// React //////////////////////////////////////////
let displayNavBar_ = () => {
  dataHandle.insertBrandsToList().then(data => {
    let brandsArr = [];
    for (let i = 0; i < 10; i++) {
      brandsArr[i] = data[i].slice(1, -1);
    }
    console.log(brandsArr);
    return brandsArr;
  });
};

//function displayPhoneDetails() {
let displayPhoneDetails_ = () => {
  dataHandle.retrievePhoneDetails().then(data => {
    let modelDetailsArr = [];
    for (let i = 0; i < 10; i++) {
      modelDetailsArr[i] = data[i][1] + " " + data[i][2];
    }
    console.log(modelDetailsArr);
  });
};
