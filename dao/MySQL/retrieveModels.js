let connection = require("./connectionSetup");

module.exports.retrieveModels = function(callback) {
  connection.query("SELECT id, brand,model,price FROM PhoneModels", function(
    err,
    rows
  ) {
    if (err) {
      callback([]);
      return;
    }
    callback(rows);
  });
};
