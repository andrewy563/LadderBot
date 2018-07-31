function trashtalk () {
  return `https://www.youtube.com/watch?v=KhsOW-_TwfU`;
}

module.exports = {
  name: 'trashtalk',
  description: 'Trashtalks for you',
  cooldown: 1,
  execute (message) {
    message.channel.send(trashtalk());
  },
  trashtalk
};
