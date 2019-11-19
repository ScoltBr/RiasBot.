const Discord = require('discord.js');
const booru = require('booru')

module.exports.run = async (client, message, args) => {
        var query = args.join(' ').replace(" ", "_");
        if(query == " ") return;
        booru.search('danbooru', [query], { limit: 3, random: true })
            .then(booru.commonfy)
            .then(images => {
                for (let image of images) {
                    const embed = new Discord.RichEmbed()
                    //  .setDescription(`[Image URL](${image.common.file_url})`)
                    embed.setImage(image.common.file_url)
                    embed.setColor('#a61416');
                    embed.setFooter('RiasBot', client.user.avatarURL).setTimestamp();
                    return message.channel.send(embed);
                }
            }).catch(err => {
                if (err.name === 'booruError') {
                    return message.channel.send(`Nenhum resultado encontrado para **${query}**!`);
                } else {
                    return message.channel.send(`Nenhum resultado encontrado para **${query}**!`);
                }
            })
}