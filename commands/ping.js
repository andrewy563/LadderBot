module.exports = {
	name: 'record',
	description: 'Records match.',
	cooldown: 1,
	execute(message) {
		message.channel.send('Pong.');
	},
};