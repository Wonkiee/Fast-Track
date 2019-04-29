//Fetch API Details
//https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

//Blocked by CORS error fix for AZURE
//https://stackoverflow.com/questions/46522749/how-to-solve-redirect-has-been-blocked-by-cors-policy-no-access-control-allow

//Declared in global scope
let phoneBrands = []; //array
let phoneDetails = {}; //dictionary
let phoneModel = {};
PORT = 3000;
let URL = "http://localhost:" + PORT + "/";
class DataHandle {
  constructor() {
    //insertBrandsToList();
  }

  //function to retrieve the brands to the list from database

  insertBrandsToList = () => {
    let promise = new Promise((resolve, reject) => {
      fetch(URL + "retrievebrands", {
        method: "get",
        mode: "cors",
        headers: {
          Accept: "application/json",
          //"Access-Control-Allow-Origin": "*",
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
          alert("Server Error");
          return reject(error);
        });
    });
    return promise;
  };

  //Retrieve the brands from the list
  retrieveBrands = index => {
    if (index < 0 || index >= phoneBrands.length) return "Incorrect Index";
    return phoneBrands[index];
  };

  //returns the number of brands available
  returnArrayLenth = () => {
    return phoneBrands.length;
  };

  //Get phone Models to the list from database
  retrievePhoneDetails = () => {
    return new Promise((resolve, reject) => {
      fetch(URL + "retrievemodels", {
        method: "get",

        headers: {
          Accept: "application/json",
          //"Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json"
        }
      })
        .then(function(response) {
          return response.json();
        })
        .then(res => {
          phoneDetails = res;
          return resolve(phoneDetails);
        })
        .catch(function(error) {
          alert("Server error!");
          return reject(error);
        });
    });
  };

  recordClickCount = phoneModelId => {
    let id = { id: phoneModelId };
    fetch(URL + "clickcount", {
      method: "post",
      //mode: "cors",
      body: JSON.stringify(id),
      headers: {
        Accept: "application/json",
        //"Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      }
    })
      .then(function(response) {
        return response;
      })
      .then(res => {})
      .catch(function(error) {
        alert("Server Error");
      });
  };

  getClickCount = () => {
    fetch(URL + "getclickcount", {
      method: "get",
      //mode: "cors",
      headers: {
        Accept: "application/json",
        //"Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      }
    })
      .then(function(response) {
        return response.json();
      })
      .then(res => {
        displayMostPopularPhones(res);
      })
      .catch(function(error) {
        alert("Server Error");
      });
  };
}
