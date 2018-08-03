function sortByValue (jsObj) {
  var sortedArray = [];
  for (var i in jsObj) {
    sortedArray.push([jsObj[i], i]);
  }
  return sortedArray.sort((a, b) => 0 - (a > b ? 1 : -1));
}

function ranking () {
  var filename = 'data/ucla/ranking.json';
  var ranks = require(`../../${filename}`);

  var output = [];
  var sortRanks = sortByValue(ranks);
  var rank = 1;
  for (const player in sortRanks) {
    output.push(`${rank}: ${sortRanks[player][1]} (${sortRanks[player][0]})`);
    rank = rank + 1;
  }
  return output;
}

module.exports = {
  name: 'ranking',
  description: 'Displays ranking',
  cooldown: 5,
  execute (message, args) {
    message.channel.send(ranking(args));
  },
  ranking
};
