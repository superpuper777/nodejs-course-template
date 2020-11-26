const { program } = require('commander');
const { actions } = require('./actions');

program
  .storeOptionsAsProperties(false)
  .requiredOption('-s, --shift <number>', 'a shift', value => value)
  .option('-i, --input <type>', 'an input file', value => value)
  .option('-o, --output <type>', 'an output file', value => value)
  .requiredOption(
    '-a, --action <type>',
    'an action encode/decode',
    value => value
  )
  .action(() => {
    const { action, shift, input, output } = program.opts();
    actions(shift, action, input, output);
  })
  .parse(process.argv);
