function about () {
  return `This bot was created by Andrew Yoon.\
  \nCheckout the code on https://github.com/andrewy563/LadderBot`;
}

module.exports = {
  name: 'about',
  description: 'About me',
  cooldown: 1,
  execute (message) {
    message.channel.send(about());
  },
  test () {
    return about();
  }
};
