const command = require('../src/commands/about.js');

test('!about outputs Andrew Yoon', () => {
  expect(command.about()).toMatch(/Andrew Yoon/);
});

test('!about outputs the github repository link', () => {
  expect(command.about()).toMatch(/https:\/\/github.com\/andrewy563\/LadderBot/);
});
