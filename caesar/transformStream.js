const { Transform } = require('stream');
const { caesarShift } = require('./caesar');

exports.transformStream = shift => {
  return new Transform({
    transform(chunk, _encoding, callback) {
      this.push(caesarShift(chunk.toString('utf8'), shift));
      callback();
    }
  });
};
