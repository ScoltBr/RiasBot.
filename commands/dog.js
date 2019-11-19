const Discord = require('discord.js');
const request = require('request');
const snekfetch = require('snekfetch')

exports.run = async (client, message, args) => {

const { body } = await snekfetch.get('https://random.dog/woof.json');
const embed = new Discord.RichEmbed()
embed.setColor('#0099ff')
embed.setImage(body.url);
embed.setFooter('RiasBot', client.user.avatarURL).setTimestamp();
message.channel.send(embed)
}