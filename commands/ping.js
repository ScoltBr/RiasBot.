const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    const exampleEmbed = new Discord.RichEmbed()
    .setColor('#a61416')
	.setDescription(`**Pong 🏓 - Você esta com ${Math.round(client.ping)}ms**`)
    let embedSent = await message.channel.send(exampleEmbed);
    //embedSent.react('🏓');
}