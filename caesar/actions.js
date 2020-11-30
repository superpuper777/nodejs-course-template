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
  // pipeline(
  //   inputStream(input),
  //   transformStream(shift),
  //   outputStream(output),
  //   e => {
  //     if (e) {
  //       console.error('Somthing gone wrong', e);
  //     }
  //   }
  // );

  async function run() {
    try {
      await pipeline(
        await inputStream(input),
        await transformStream(shift),
        await outputStream(output),
        err => {
          if (err) {
            console.error('Pipeline failed.', err);
          } else {
            console.log('Pipeline succeeded.');
          }
        }
      );
    } catch (error) {
      console.error(`Error: ${error}`);
    }
  }
  run();
};
