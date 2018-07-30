module.exports = {
  name: 'john',
  description: 'Johns for you.',
  cooldown: 1,
  execute (message) {
    message.channel.send('The sun was in my eyes.');
  }
};
