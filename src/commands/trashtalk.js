var filename = 'data/ucla/trashtalk.json';
var trashtalkJSON = require(`../../${filename}`);

function trashtalk () {
  var index = Math.floor(Math.random() * trashtalkJSON.trash.length);
  return trashtalkJSON.trash[index];
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
