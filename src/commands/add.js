var fs = require('fs');

function add (args) {
  var filename = 'data/ucla/ranking.json';
  var ranks = require(`../../${filename}`);

  var playerName = args[0];

  if (args.length !== 1) {
    return 'Invalid message! Usage is !add {playerID}';
  }

  if (ranks.hasOwnProperty(playerName)) {
    return `${playerName} already exists!`;
  }
  ranks[playerName] = 1200;

  fs.writeFile(`./${filename}`, JSON.stringify(ranks), (err) => {
    if (err) throw err;
  });

  return `${playerName} has been added!`;
}

module.exports = {
  name: 'add',
  description: 'Adds a player to the ladder with a starting elo of 1200.',
  cooldown: 5,
  execute (message, args) {
    message.channel.send(add(args));
  },
  add
};
