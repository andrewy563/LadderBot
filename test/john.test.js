const command = require('../src/commands/john.js');

test('!john outputs something', () => {
  expect(command.john()).toBeDefined();
});

// TODO: create a mock list of trashtalk quotes and make sure the output is in this list.
