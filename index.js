var walkitout = require('walkitout');

function wiothen(dirPath, callback) {
  return new Promise(function (resolve, reject) {
    walkitout(dirPath, function (err, filePath, next) {
      if (err) return reject(err);
      callback(filePath, next);
    }, function () {
      resolve();
    });
  });  
}

module.exports = wiothen;
