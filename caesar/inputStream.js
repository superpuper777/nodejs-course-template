const fs = require('fs');

exports.inputStream = filename => {
  return new Promise(resolve => {
    if (filename) {
      fs.access(filename, fs.constants.F_OK, err => {
        if (err) {
          console.error(err);
          return;
        }
        resolve(fs.createReadStream(filename, {}));
      });
    } else resolve(process.stdin);
  });
};
