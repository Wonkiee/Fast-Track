let client = require("./connectionSetup");

module.exports.addClickCount = function(id) {
  if (client.incr(id) == "null") client.set(id);
  //client.hincrby("clickCount", id, 1);
};
