const Discord = require('discord.js');
const Kitsu = require('kitsu.js');
const kitsu = new Kitsu();
var aq = require('animequote');

exports.run = (client, message, args) => {
    var search = message.content.split(/\s+/g).slice(1).join(" ");
        if (!search) {
            return message.channel.send('Forneça-me um mangá para procurar!');
        }
        kitsu.searchManga(search).then(result => {
            if (result.length === 0) {
                return message.channel.send(`Nenhum resultado encontrado para**${search}**!`);
            }
            var manga = result[0]
            let embed = new Discord.RichEmbed()
                .setColor('#a61416')
                .setAuthor(`${manga.titles.english}`, manga.posterImage.original)
                .setDescription(manga.synopsis.replace(/<[^>]*>/g, '').split('\n')[0])
                .addField('❯\u2000\Informações', `•\u2000\**Nome em Japones :** ${manga.titles.romaji}\n\•\u2000\**Faixa etária:** ${manga.ageRating ? manga.ageRating : '`N/A`'}\n\•\u2000\**Capítulos:** ${manga.chapterCount ? manga.chapterCount : '`N/A`'}`, true)
                .addField('❯\u2000\Stats', `•\u2000\**Classificação média:** ${manga.averageRating ? manga.averageRating : '`N/A`'}\n\•\u2000\**Classificação:** ${manga.ratingRank ? manga.ratingRank : '`N/A`'}\n\•\u2000\**Popularidade:** ${manga.popularityRank ? manga.popularityRank : '`N/A`'}`, true)
                .addField('❯\u2000\Status', `•\u2000\**Volumes:** ${manga.volumeCount ? manga.volumeCount : '`N/A`'}\n\•\u2000\**Lançamento:** ${manga.startDate}\n\•\u2000\**Final/Em Andamento:** ${manga.endDate ? manga.endDate : "Em andamento"}`, true)
                .setImage(manga.posterImage.original);
                embed.setFooter('RiasBot', client.user.avatarURL).setTimestamp();
                return message.channel.send(embed);
        }).catch(err => {
            console.log(err);
            return message.channel.send(`Nenhum resultado encontrado para **${search}**!`)
        })
}