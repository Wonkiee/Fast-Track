"use strict";

var mysql = require("mysql");

var MongoClient = require("mongodb").MongoClient;

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "MobilePhoneShop"
}); //Retrieve Phone Brands //working

app.get("/db/retrievebrands", cors(corsOptions), function(req, res, next) {
  connection.query("SELECT brand_name FROM Brands", function(
    err,
    rows,
    fields
  ) {
    if (err) throw err;
    console.log("The ########### ", rows);
    var brandNames = [];

    for (var i = 0; i < rows.length; i++) {
      brandNames[i] = rows[i].brand_name;
    }

    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify(brandNames));
  });
});
