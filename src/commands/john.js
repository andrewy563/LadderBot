var filename = 'data/ucla/john.json';
var ranks = require(`../../${filename}`);

function john () {
  var index = Math.floor(Math.random() * ranks.john.length);
  return ranks.john[index];
}

module.exports = {
  name: 'john',
  description: 'Johns for you.',
  cooldown: 1,
  execute (message) {
    message.channel.send(john());
  },
  john
};
