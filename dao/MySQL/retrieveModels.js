let connection = require("./connectionSetup");

module.exports.retrieveModels = function(func) {
  connection.query("SELECT id, brand,model,price FROM PhoneModels", function(
    err,
    rows,
    fields
  ) {
    if (err) {
      func([]);
      return;
    }
    func(rows);
  });
};
