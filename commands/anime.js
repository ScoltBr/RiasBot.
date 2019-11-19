const Discord = require('discord.js');
const Kitsu = require('kitsu.js');
const kitsu = new Kitsu();
var aq = require('animequote');


exports.run = (client, message, args) => {
    var search = message.content.split(/\s+/g).slice(1).join(" ");
    if (!search) {
        kitsu.searchAnime(aq().quoteanime).then(result => {
            var anime = result[0]
            let embed = new Discord.RichEmbed()
                .setColor('#a61416')
                .setAuthor(`${anime.titles.english} | ${anime.showType}`, anime.posterImage.original)
                .setDescription(anime.synopsis.replace(/<[^>]*>/g, '').split('\n')[0])
                .addField('❯\u2000\Informações', `•\u2000\**Nome em  Japones:** ${anime.titles.romaji}\n\•\u2000\Classificação Etária:** ${anime.ageRating}\n\•\u2000\**Improprio: ${anime.nsfw ? 'Sim' : 'Não'}`, true)
                .addField('❯\u2000\Stats', `•\u2000\**Classificação média:** ${anime.averageRating}\n\•\u2000\**Classificação:** ${anime.ratingRank}\n\•\u2000\**Popularidade:** ${anime.popularityRank}`, true)
                .addField('❯\u2000\Status', `•\u2000\**Episódios:** ${anime.episodeCount ? anime.episodeCount : 'N/A'}\n\•\u2000\**Começou em:** ${anime.startDate}\n\•\u2000\**Fim:** ${anime.endDate ? anime.endDate : "Ainda no ar"}`, true)
                .addField('❯\u2000\Status',  `•\u2000\**Tipo:** ${anime.type}`)
                .setImage(anime.posterImage.original);
                embed.setFooter('RiasBot', client.user.avatarURL);
            return message.channel.send(`Tente assistir **${anime.titles.english}**!`, { embed: embed });
        })
    } else {
        var search = message.content.split(/\s+/g).slice(1).join(" ");
        kitsu.searchAnime(search).then(result => {
            if (result.length === 0) {
                return message.channel.send(`Nenhum resultado encontrado para **${search}**!`);
            }
            var anime = result[0]
            let embed = new Discord.RichEmbed()
                .setColor('#a61416')
                .setAuthor(`${anime.titles.english ? anime.titles.english : search} | ${anime.showType}`, anime.posterImage.original)
                .setDescription(anime.synopsis.replace(/<[^>]*>/g, '').split('\n')[0])
                .addField('❯\u2000\Informações', `•\u2000\**Nome em  Japones:** ${anime.titles.romaji}\n\•\u2000\*Classificação Etária:** ${anime.ageRating}\n\•\u2000\**Improprio:** ${anime.nsfw ? 'Sim' : 'Não'}`, true)
                .addField('❯\u2000\Stats', `•\u2000\**Classificação média:** ${anime.averageRating}\n\•\u2000\**Classificação:** ${anime.ratingRank}\n\•\u2000\**Popularidade:** ${anime.popularityRank}`, true)
                .addField('❯\u2000\Status', `•\u2000\**Episódios:** ${anime.episodeCount ? anime.episodeCount : 'N/A'}\n\•\u2000\**Começou em:** ${anime.startDate}\n\•\u2000\**Fim:** ${anime.endDate ? anime.endDate : "Ainda no ar"}`, true)
                .setImage(anime.posterImage.original);
                embed.setFooter('RiasBot', client.user.avatarURL).setTimestamp();
            return message.channel.send({ embed });
        }).catch(err => {
            console.log(err)
            return message.channel.send(`Nenhum resultado encontrado para **${search}**!`);
        });
    }
}