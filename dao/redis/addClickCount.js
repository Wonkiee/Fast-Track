let client = require("./connectionSetup");

module.exports.addClickCount = function(id) {
  try {
    if (client.incr(id) == "null") client.set(id);
    return true;
  } catch (error) {
    return false;
  }
};
