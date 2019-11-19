const Discord = require('discord.js');
const superagent = require('superagent');
const randomPuppy = require('random-puppy');


exports.run = (client, message, args) => {

    if(args[0] == null){
        var subreddits = [
            'NSFW_Wallpapers',
            'SexyWallpapers',
            'HighResNSFW',
            'nsfw_hd',
            'UHDnsfw',
            'porn',
            'PAWG',
            'BDSM',
            'Fifty_Shades_of_Grey']
        var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];
        randomPuppy(sub)
            .then(url => {
                const embed = new Discord.RichEmbed()
                embed.setColor('#a61416')
                embed.setImage(url);
                embed.setFooter('RiasBot', client.user.avatarURL).setTimestamp();
                message.channel.send(embed);
            })
    }
    if(args[0] == '4k'){
        superagent.get('https://nekobot.xyz/api/image')
        .query({ type: '4k'})
        .end((err, response) => {
            const embed = new Discord.RichEmbed()
            embed.setColor('#a61416')
            embed.setImage(response.body.message);
            embed.setFooter('RiasBot', client.user.avatarURL).setTimestamp();
            message.channel.send(embed);
        });
    }
    if(args[0] == 'anal'){
        superagent.get('https://nekobot.xyz/api/image')
        .query({ type: 'anal'})
        .end((err, response) => {
            const embed = new Discord.RichEmbed()
            embed.setColor('#a61416')
            embed.setImage(response.body.message);
            embed.setFooter('RiasBot', client.user.avatarURL).setTimestamp();
            message.channel.send(embed);
        });
    }
    if(args[0] == 'ass'){
        superagent.get('https://nekobot.xyz/api/image')
        .query({ type: 'ass'})
        .end((err, response) => {
            const embed = new Discord.RichEmbed()
            embed.setColor('#a61416')
            embed.setImage(response.body.message);
            embed.setFooter('RiasBot', client.user.avatarURL).setTimestamp();
            message.channel.send(embed);
        });
    }
    if(args[0] == 'gif'){
        superagent.get('https://nekobot.xyz/api/image')
        .query({ type: 'pgif'})
        .end((err, response) => {
            const embed = new Discord.RichEmbed()
            embed.setColor('#a61416')
            embed.setImage(response.body.message);
            embed.setFooter('RiasBot', client.user.avatarURL).setTimestamp();
            message.channel.send(embed);
        });
    }
    if(args[0] == 'hentai'){
        superagent.get('https://nekobot.xyz/api/image')
        .query({ type: 'hentai'})
        .end((err, response) => {
            const embed = new Discord.RichEmbed()
            embed.setColor('#a61416')
            embed.setImage(response.body.message);
            embed.setFooter('RiasBot', client.user.avatarURL).setTimestamp();
            message.channel.send(embed);
        });
    }
    if(args[0] == 'holo'){
        superagent.get('https://nekobot.xyz/api/image')
        .query({ type: 'holo'})
        .end((err, response) => {
            const embed = new Discord.RichEmbed()
            embed.setColor('#a61416')
            embed.setImage(response.body.message);
            embed.setFooter('RiasBot', client.user.avatarURL).setTimestamp();
            message.channel.send(embed);
           // message.channel.send({ file: response.body.message });
        });
    }
    if(args[0] == 'neko'){
        superagent.get('https://nekos.life/api/lewd/neko')
        .query({ type: 'trap'})
        .end((err, response) => {
            const embed = new Discord.RichEmbed()
            embed.setColor('#a61416')
            embed.setImage(response.body.neko);
            embed.setFooter('RiasBot', client.user.avatarURL).setTimestamp();
            message.channel.send(embed);
        });
    }
    if(args[0] == 'pussy'){
        superagent.get('https://nekobot.xyz/api/image')
        .query({ type: 'pussy'})
        .end((err, response) => {
            const embed = new Discord.RichEmbed()
            embed.setColor('#a61416')
            embed.setImage(response.body.message);
            embed.setFooter('RiasBot', client.user.avatarURL).setTimestamp();
            message.channel.send(embed);
        });
    }
    if(args[0] == 'thigh'){
        superagent.get('https://nekobot.xyz/api/image')
        .query({ type: 'thigh'})
        .end((err, response) => {
            const embed = new Discord.RichEmbed()
            embed.setColor('#a61416')
            embed.setImage(response.body.message);
            embed.setFooter('RiasBot', client.user.avatarURL).setTimestamp();
            message.channel.send(embed);
        });
    }
}