//import { createConnection } from "mysql";
let mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "MobilePhoneShop"
});

module.exports = connection;
