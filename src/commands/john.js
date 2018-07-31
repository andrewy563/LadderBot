function john () {
  return 'The sun was in my eyes.';
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
