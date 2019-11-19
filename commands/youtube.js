const Discord = require('discord.js');
const { YouTube } = require('better-youtube-api')
const youtube = new YouTube("AIzaSyD1BcN3tcHFK545pzPJ56mguXTSDKiVjLQ");

function sub(value) {

    if (value <= 1000) {
        return value.toString();
    }

    const numDigits = (""+value).length;
    const suffixIndex = Math.floor(numDigits / 3);

    const normalisedValue = value / Math.pow(1000, suffixIndex);

    let precision = 2;
    if (normalisedValue < 1) {
        precision = 1;
    }

    const suffixes = ["", "K", "M", "B","T"];
    return normalisedValue.toPrecision(precision) + suffixes[suffixIndex];
}

exports.run = async (client, message, args) => {
        var canal = args[0]
            if (!canal) return message.reply('Especifique o Canal!');
            const analytics = await youtube.getChannel(canal);
           //const analytics = await youtube.getChannel(`https://www.youtube.com/channel/${canal}`);
         const embed = new Discord.RichEmbed();
         embed.setTitle(`Informações sobre o canal **${canal}**`)
         embed.setColor('#a61416')
         embed.setThumbnail(analytics.profilePictures.high.url)
         embed.setImage(analytics.banners.bannerImageUrl)
         var Subs = analytics.subCount;
         embed.addField(`Quantidade de Inscritos:`, `**${sub(Subs)}**`, true);
         embed.addField(`Quantidade de visualizações:`, `**${sub(analytics.views)}**`, true);
         embed.addField(`Link do canal:`, `🔗 [${analytics.name}](${analytics.url})`)
         message.channel.send(embed);
    }