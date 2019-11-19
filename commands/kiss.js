const Discord = require('discord.js');

exports.run = async (client, message, args) => {

    let member = message.mentions.members.first() || message.member,
    user = member.user;

    //if(client.user.id == "631969305545932831")return message.channel.send("🥰");

    if(user == message.author || user.id == "631969305545932831"){
        const exampleEmbed = new Discord.RichEmbed()
        .setColor('#a61416')
        .setDescription(`${message.author} Beijou Rias Gremory`)
        .setImage('https://i.ytimg.com/vi/rhTRFyHb6dk/maxresdefault.jpg')
        .setFooter('RiasBot', client.user.avatarURL).setTimestamp();
        let embedSent = await message.channel.send(exampleEmbed);
    }else{
        const exampleEmbed = new Discord.RichEmbed()
        .setColor('#a61416')
        .setDescription(`${message.author} Beijou ${user}`)
        .setImage('https://i.ytimg.com/vi/rhTRFyHb6dk/maxresdefault.jpg')
        .setFooter('RiasBot', client.user.avatarURL).setTimestamp();
        let embedSent = await message.channel.send(exampleEmbed);
    }
}