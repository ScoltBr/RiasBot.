const Discord = require("discord.js");

exports.run = async (client, message, args) => {

  const ops = new Discord.RichEmbed()
	.setDescription("❌|Ops... Você não possui permissão para usar este comando.")
	.setColor("#FF8000")
	.setTimestamp()

  if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply(ops)

  const usar = new Discord.RichEmbed()
  .setColor("a61416")
  .setTimestamp()
  .setTitle("📟 Comando: `r!votacao [texto]`")
  .setThumbnail(client.user.avatarURL).setTimestamp()

  let mandar = args.join(" ")
  if (!mandar) return message.reply(usar)

  const embed = new Discord.RichEmbed()
  .setColor("#a61416")
  .setFooter(`Feita por: ${message.author.username}`, message.author.avatarURL)
  .setDescription(mandar)
  .setAuthor("📊 | Votação")
  //.setThumbnail(client.user.avatarURL)

  message.delete()
  message.channel.send(embed).then(async msg => {
    await msg.react("✅")
    await msg.react("❌")
  })
  message.channel.send("@everyone").then(async msg => {
    msg.delete()
  })

}