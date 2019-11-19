const Discord = require('discord.js');

exports.run = async (client, message, args) => {
const embed = new Discord.RichEmbed()
embed.setColor('#a61416')
embed.setDescription("**r!anime (Nome do Anime):para saber todas informações do anime\n r!manga (Nome do Manga): para saber todas informações do manga \nr!beat  : Oppai Music \nr!cute : Uma imagem muito cute :3\nr!cat : Fotos aleatórias de gatos\nr!dog  : Fotos aleatórias de cachorros\nr!kiss : para mandar um beijo para Rias ou Outra pessoa\nr!ping : para ver seu ping em relação a nossa api\nr!skins (Cabeças / Corpo) (Nick) para ver skin de Minecraft\nr!youtube (Nome do Canal) para ver Informações Sobre o canal**")
embed.setFooter('RiasBot', client.user.avatarURL).setTimestamp();
const nsfw = message.guild.emojis.find(emoji => emoji.name === 'nsfw')
const ping = message.guild.emojis.find(emoji => emoji.name === 'ping')
message.react(nsfw)
message.react(ping);

const filter = (reaction, user) => {
	return ['nsfw', 'ping'].includes(reaction.emoji.name) && user.id === message.author.id;
};

message.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
	.then(collected => {
		const reaction = collected.first();

		if (reaction.emoji.name === 'ping') {
            const exampleEmbed = new Discord.RichEmbed()
            .setColor('#a61416')
            .setDescription(`**Pong 🏓 - Você esta com ${Math.round(client.ping)}ms**`)
            message.delete();
            message.channel.send(exampleEmbed);
		} else {
			message.reply('Putaria');
		}
	})
	.catch(collected => {
		message.reply('Deu ruim.');
	});



}