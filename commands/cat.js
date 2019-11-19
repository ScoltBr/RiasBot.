const Discord = require('discord.js');
const request = require('request');
const snekfetch = require('snekfetch')

exports.run = async (client, message, args) => {

request.get('http://thecatapi.com/api/images/get?format=src&type=png', {

}, function(error, response, body) {
	if(!error && response.statusCode == 200) {
        const embed = new Discord.RichEmbed()
        embed.setColor('#0099ff')
        embed.setImage(response.request.uri.href);
		embed.setFooter('RiasBot', client.user.avatarURL).setTimestamp();
		message.channel.send(embed);
	} else {
		console.log(error);
	}
})
}