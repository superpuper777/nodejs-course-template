const fs = require('fs');

exports.inputStream = filename => {
  if (filename) {
    fs.access(filename, fs.F_OK, err => {
      if (err) {
        console.error(err);
        return;
      }
      return fs.createReadStream(filename);
    });
  } else return process.stdin;
};
