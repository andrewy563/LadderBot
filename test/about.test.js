const about = require('../src/commands/about.js');

test('!about outputs Andrew Yoon', () => {
  expect(about.test()).toMatch(/Andrew Yoon/);
});

test('!about outputs the github repository link', () => {
  expect(about.test()).toMatch(/https:\/\/github.com\/andrewy563\/LadderBot/);
});
