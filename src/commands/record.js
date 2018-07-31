var fs = require('fs');
var filename = 'data/ucla/ranking.json';
var ranking = require(`../../${filename}`);
var EloRank = require('elo-rank');
var elo = new EloRank(32);

function record (args) {
  var playerA = args[0];
  var playerB = args[1];
  var result = args[2];

  if (args.length !== 3) {
    return `Invalid message! Usage is !record {player1} {player2} {matches}\
    \nExample: !record Scar TheCrimsonBlur WLW`;
  }
  if (!ranking.hasOwnProperty(playerA)) {
    return `${playerA} is not in the ladder!`;
  }
  if (!ranking.hasOwnProperty(playerB)) {
    return `${playerB} is not in the ladder!`;
  }
  if (!result.match(/[WLwl]+/)) {
    return `The result argument is not valid! Use W for wins and L for losses!
    \nExample: WLWW`;
  }

  var playerARating = ranking[playerA];
  var playerBRating = ranking[playerB];

  for (const match of result) {
    var expectedScoreA = elo.getExpected(playerARating, playerBRating);
    var expectedScoreB = elo.getExpected(playerBRating, playerARating);
    if (match === 'W' || match === 'w') {
      playerARating = elo.updateRating(expectedScoreA, 1, playerARating);
      playerBRating = elo.updateRating(expectedScoreB, 0, playerBRating);
    } else {
      playerARating = elo.updateRating(expectedScoreA, 0, playerARating);
      playerBRating = elo.updateRating(expectedScoreB, 1, playerBRating);
    }
  }
  ranking[playerA] = playerARating;
  ranking[playerB] = playerBRating;

  fs.writeFile(`./${filename}`, JSON.stringify(ranking), (err) => {
    if (err) throw err;
  });
  return 'Match has been recorded!';
}
module.exports = {
  name: 'record',
  description: 'Records match.',
  cooldown: 1,
  execute (message, args) {
    message.channel.send(record(args));
  },
  record
};
