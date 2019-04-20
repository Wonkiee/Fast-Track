const assert = require("chai").assert;
//const app = require("../app");
const request = require("supertest");
const app = require("../app");
var chai = require("chai");

var expect = chai.expect; // Using Expect style

const dbHandleObject = require("../dest/public/javascripts/dataHandle");
phoneBrands = ["Apple", "Samsung", "Sony", "Huawei"];

describe("returnArrayLength() Test", function() {
  it("Testing The Output Format is a number or not", function() {
    assert.isNumber(dbHandleObject.returnArrayLenth());
  });
});

describe("retrieveBrands() Test", function() {
  it("Testing when array is empty", function() {
    assert.equal(dbHandleObject.retrieveBrands(0), "Empty");
  });
});

describe("Testing the home route", function() {
  it("/ - Should return OK", function() {
    return request(app)
      .get("/")
      .then(function(response) {
        assert.equal(response.status, 200);
      });
  });
});

describe("Testing the /retrievebrands route", function() {
  it("Should return OK", function() {
    return request(app)
      .get("/retrievebrands")
      .then(function(response) {
        assert.equal(response.status, 200);
      });
  });

  it("Should return Apple", function() {
    return request(app)
      .get("/retrievebrands")
      .then(function(response) {
        expect(response.body[0]).to.equal("Apple");
      });
  });
});

describe("Testing the /retrievemodels route", function() {
  it("Should return OK", function() {
    return request(app)
      .get("/retrievemodels")
      .then(function(response) {
        assert.equal(response.status, 200);
      });
  });

  it("Should return 1", function() {
    return request(app)
      .get("/retrievemodels")
      .then(function(response) {
        expect(response.body[0][0]).to.equal(1);
      });
  });

  it("Should return Apple", function() {
    return request(app)
      .get("/retrievemodels")
      .then(function(response) {
        expect(response.body[0][1]).to.equal("Apple");
      });
  });
});

describe("Testing the /getclickcount route", function() {
  it("Should return OK", function() {
    return request(app)
      .get("/getclickcount")
      .then(function(response) {
        assert.equal(response.status, 200);
      });
  });
});
