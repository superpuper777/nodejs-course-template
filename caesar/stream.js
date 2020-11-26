const { Transform, pipeline } = require('stream');

const inputStream = process.stdin;
const outputStream = process.stdout;

const upperStream = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  }
});

pipeline(inputStream, outputStream, upperStream, err => {
  if (err) {
    console.log('error', err);
  }
});
