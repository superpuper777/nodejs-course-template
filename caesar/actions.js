const { pipeline } = require('stream');
const { inputStream } = require('./inputStream');
const { outputStream } = require('./outputStream');
const { transformStream } = require('./transformStream');

exports.actions = (shift, action, input, output) => {
  if (shift < 0 && action === 'encode') {
    throw new Error('Error! Please enter only positive numbers!');
    // process.exit(1);
  }

  shift = action === 'encode' ? shift * 1 : shift * -1;
  pipeline(
    inputStream(input),
    transformStream(shift),
    outputStream(output),
    e => {
      if (e) {
        console.error('Somthing gone wrong', e);
      }
    }
  );
};
