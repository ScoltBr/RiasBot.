const Discord = require('discord.js');

exports.run = async (client, message, args) => {

  if(args[0] == null) return message.channel.send(`${message.author} Use: r!skins <cabeca/corpo> <Nickname>`);


  if(args[0] == "body" || args[0] == "corpo"){
    if (args[1] == null) return message.channel.send(`${message.author} Quem devo procurar?`);
         skin = args[1];
            const embed = new Discord.RichEmbed()
            embed.setTitle(`Corpo do **${skin}**`)
            embed.setImage(`https://minotar.net/body/${skin}/100.png`)
            embed.setColor('#a61416');
            embed.setFooter('RiasBot', client.user.avatarURL).setTimestamp();
            message.channel.send(embed)
  }
  if(args[0] == "head" || args[0] == "cabeca"){
    if (args[1] == null) return message.channel.send(`${message.author} Quem devo procurar?`);
         skin = args[1];
            const embed = new Discord.RichEmbed()
            embed.setTitle(`Cabeça do **${skin}**`)
            embed.setImage(`https://minotar.net/helm/${skin}/100.png`)
            embed.setColor('#a61416');
            embed.setFooter('RiasBot', client.user.avatarURL).setTimestamp();
            message.channel.send(embed)
  }
}