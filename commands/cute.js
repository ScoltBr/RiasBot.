const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    const embed = new Discord.RichEmbed()
    embed.setColor('#a61416')
    embed.setImage('https://pa1.narvii.com/6797/2e32d122881d3017a5e25d1583fee3e35217162d_hq.gif');
    embed.setFooter('RiasBot', client.user.avatarURL).setTimestamp();
    message.channel.send(embed);
}