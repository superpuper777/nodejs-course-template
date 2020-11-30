const fs = require('fs');

exports.outputStream = filename => {
  return new Promise(resolve => {
    if (filename) {
      fs.access(filename, fs.constants.F_OK, err => {
        if (err) {
          console.error(err);
          return;
        }
        resolve(fs.createWriteStream(filename, { flags: 'a' }));
      });
    } else {
      console.log('Press CTRL+C for exit.');
      resolve(process.stdout);
    }
  });
};
