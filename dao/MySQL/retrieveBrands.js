let connection = require("./connectionSetup");

module.exports.retrieveBrands = function retrieveBrands(callback) {
  let rowData;
  connection.query("SELECT brand_name FROM Brands", function(err, rows) {
    if (err) {
      callback([]);
      return;
    }
    callback(rows);
  });

  return rowData;
};
