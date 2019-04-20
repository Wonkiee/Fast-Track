let client = require("./connectionSetup");

module.exports.getKeys = function() {
  return new Promise((resolve, reject) => {
    client.keys("*", function(err, keys) {
      if (err) return reject(err);
      else return resolve(keys);
    });
  });
};

module.exports.getClickCount = function(key) {
  return new Promise((resolve, reject) => {
    client.get(key, function(err, reply) {
      if (err) return reject(err);
      else return resolve(reply);
    });
  });
};
