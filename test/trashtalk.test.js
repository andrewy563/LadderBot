const command = require('../src/commands/trashtalk.js');

test('!trashtalk outputs something', () => {
  expect(command.trashtalk()).toBeDefined();
});

// TODO: create a mock list of trashtalk quotes and make sure the output is in this list.
