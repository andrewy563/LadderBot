module.exports = {
  name: 'about',
  description: 'About me',
  cooldown: 1,
  execute (message) {
    message.channel.send(`This bot was created by Andrew Yoon.\
    \nCheckout the code on https://github.com/andrewy563/LadderBot`);
  }
};
