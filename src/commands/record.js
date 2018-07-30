var fs = require('fs');
var filename = 'data/ucla/ranking.json';
var ranking = require(`../../${filename}`);
var EloRank = require('elo-rank');
var elo = new EloRank(32);

function record (newRanking) {
  fs.writeFile(`./${filename}`, newRanking, (err) => {
    if (err) throw err;
  });
}

module.exports = {
  name: 'record',
  description: 'Records match.',
  cooldown: 1,
  execute (message, args) {
    var playerA = args[0];
    var playerB = args[1];
    var result = args[2];

    if (args.length !== 3) {
      message.channel.send(`Invalid message! Usage is !record {player1} {player2} {matches}\
      \nExample: !record Scar TheCrimsonBlur WLW`);
      return;
    }
    if (!ranking.hasOwnProperty(playerA)) {
      message.channel.send(`${playerA} is not in the ladder!`);
      return;
    }
    if (!ranking.hasOwnProperty(playerB)) {
      message.channel.send(`${playerB} is not in the ladder!`);
      return;
    }
    if (!result.match(/{WLwl}+/)) {
      message.channel.send(`The result argument is not valid! Use W for wins and L for losses!\
      \nExample: WLWW`);
      return;
    }

    var playerARating = ranking.Andrew;
    var playerBRating = ranking.Alfredo;

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

    record(JSON.stringify(ranking));
    message.channel.send('Match has been recorded!');
  }
};
