//Fetch API Details
//https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

var phoneBrands = []; //array
var phoneDetails = {}; //dictionary

//User | Admin Details
//var userDetails = {};
//var adminDetails = {};

var paragraphCreated = false;
//var textBoxCreated = false;

class dbHandleForAdminPage {
  constructor() {
    //insertBrandsToList();
  }

  //function to retrieve the brands to the list from database
  async insertBrandsToList() {
    //working

    var promise = new Promise((resolve, reject) => {
      fetch("http://localhost:8000/db/retrievebrands", {
        method: "get",
        mode: "cors",
        headers: {
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json"
        }
      })
        .then(response => response.json())
        .then(function(response) {
          for (var i = 0; i < response.length; i++) {
            phoneBrands.push(JSON.stringify(response[i]));
          }
          return resolve(phoneBrands);
        })
        .catch(error => {
          //console.log(error);
          return reject(error);
        });
    });

    return promise;
    //phoneBrands.push("Apple");
    //phoneBrands.push("Samsung");
  }

  //Retrieve the brands from the list
  retrieveBrands(index) {
    if (index < 0 /*|| index >= phoneBrands.length*/) return "Incorrect Index";
    else if (phoneBrands.length == 0) return "Empty";
    return phoneBrands[index];
  }

  //returns the number of brands available
  returnArrayLenth() {
    if (phoneBrands == null) return -1;
    return phoneBrands.length;
  }

  //Get phone Models to the list from database
  retrievePhoneDetails() {
    //working
    fetch("http://localhost:8000/db/retrievemodels", {
      method: "get",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      }
    })
      .then(function(response) {
        return response.json();
      })
      //.then(res => {
      //  console.log(res);
      //})
      .catch(function(error) {
        // eslint-disable-next-line no-console
        console.log(error);
      });

    if (this.returnArrayLenth == 0) return "Empty";

    for (var i = 0; i < this.returnArrayLenth(); i++) {
      phoneDetails[this.retrieveBrands(i)] = [i];
      // eslint-disable-next-line no-console
      console.log(phoneDetails[i]);
    }
  }

  //Admin Page

  //Fucntion to execute when a phone brand is clicked on the admin page
  onclickBrand(clickedButtonId) {
    if (paragraphCreated) {
      var parent = document.getElementById("displayDetails");
      var child = document.getElementById("para");
      parent.removeChild(child);
    }
    var brandDetails = phoneDetails[clickedButtonId];

    var para = document.createElement("p");
    para.setAttribute("id", "para");
    var node = document.createTextNode(brandDetails);
    para.appendChild(node);
    var element = document.getElementById("displayDetails");
    element.appendChild(para);
    paragraphCreated = true;
  }

  //Display Add Brand Text box and button
  addBrand(id) {
    var textBox = document.getElementById("txt_addPhone");
    var button = document.getElementById("btn_addPhone");

    textBox.style.display = "none";
    button.style.display = "none";

    document.getElementById("txt_addBrand").style.display = "block";
    document.getElementById("btn_addBrand").style.display = "block";
  }

  //Display Add Phone Text box and button
  addPhone() {
    var textBox = document.getElementById("txt_addBrand");
    var button = document.getElementById("btn_addBrand");
    textBox.style.display = "none";
    button.style.display = "none";

    document.getElementById("txt_addPhone").style.display = "block";
    document.getElementById("btn_addPhone").style.display = "block";
  }

  //Submit the newly added Phone Brand to DB
  submitBrand(txtBoxId) {
    //working
    var brandName = document.getElementById(txtBoxId).value;

    var phoneBrand = { brand: brandName };
    fetch("http://localhost:8000/db/addbrand", {
      method: "post",
      body: JSON.stringify(phoneBrand),
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      }
    })
      .then(function(response) {
        // eslint-disable-next-line no-console
        console.log(response.body);
      })
      .catch(function(error) {
        alert("Error Entering Data!");
        return;
        //console.log(error);
      });

    phoneBrands.push(brandName);
    //document.write(brandName);
  }

  //Submit the newly added phone model to DB
  submitPhone(textBoxId) {
    //working
    var phoneModelName = document.getElementById(textBoxId).value;
    phoneDetails[phoneModelName] = "newPhoneModel";

    var phoneModel = { brand: phoneModelName };
    fetch("http://localhost:8000/db/addphone", {
      method: "post",
      body: JSON.stringify(phoneModel),
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      }
    })
      .then(function(response) {
        // eslint-disable-next-line no-console
        console.log(response.body);
      })
      .catch(function(error) {
        alert("Error Entering Data!");
        return;
        //console.log(error);
      });
  }
}
var testObject = new dbHandleForAdminPage();
module.exports = testObject;
