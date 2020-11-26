const fs = require('fs');

// exports.outputStream = filename => {
//   if (filename) {
//     if (fs.existsSync(filename)) {
//       return fs.createWriteStream(filename, { flags: 'a' });
//     }
//     console.error('Output file does not exist');
//     process.exit(9);
//   }

//   return process.stdout;
// };

exports.outputStream = filename => {
  if (filename) {
    fs.access(filename, fs.W_OK, err => {
      if (err) {
        console.error(err);
        return;
      }
      return fs.createWriteStream(filename, { flags: 'a' });
    });
  } else return process.stdout;
};
