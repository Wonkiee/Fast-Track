let connection = require("./connectionSetup");

module.exports.retrieveBrands = function retrieveBrands(func) {
  let rowData;
  connection.query("SELECT brand_name FROM Brands", function(err, rows) {
    if (err) {
      func([]);
      return;
    }
    func(rows);
  });

  return rowData;
};
