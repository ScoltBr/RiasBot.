const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    const embed = new Discord.RichEmbed()
    embed.setColor('#a61416')
    embed.setImage('https://i.imgur.com/D9rAZzN.gif');
    embed.setFooter('RiasBot', client.user.avatarURL).setTimestamp();
    message.channel.send(embed);
}