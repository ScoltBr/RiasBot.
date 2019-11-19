const Discord = require("discord.js");
const ffmpeg = require("ffmpeg-binaries");
const opusscript = require("opusscript");

exports.run = (client, message, args) => {
  
    if(args[0] == "kpop"){
      if (message.member.voiceChannel) {
        message.member.voiceChannel.join()
          .then(connection => {
            let embed = new Discord.RichEmbed()
            .setDescription('**Conectado!** Tocando Radio KPOP.')
            .setColor('#a61416')
            connection.playArbitraryInput(`https://listen.moe/kpop/opus`);
            embed.setFooter('RiasBot', client.user.avatarURL);
            message.channel.send(embed);      
          })
          .catch(console.log);
      } else {
        message.reply('Você não está em um canal de voz!');
      }
    }
    if(args[0] == "jpop"){
        if (message.member.voiceChannel) {
          message.member.voiceChannel.join()
            .then(connection => {
              let embed = new Discord.RichEmbed()
              .setDescription('**Conectado!** Tocando Radio KPOP.')
              .setColor('#a61416')
              .addField('Musica:', connection.albums)
              connection.playArbitraryInput(`https://listen.moe/jpop/opus`);
              message.channel.send(embed);
            })
            .catch(console.log);
        } else {
          message.reply('Você não está em um canal de voz!');
        }
      }
    };