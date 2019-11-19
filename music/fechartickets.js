const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  
      const nop = new Discord.RichEmbed()
      .setDescription("🚫|Você não pode usar este comando fora de um canal de ticket.")
      .setColor("#FF8000")
      .setTimestamp()

      if (!message.channel.name.startsWith(`💬ticket-`)) return message.reply(nop)/*("🚫 Você não pode usar este comando fora de um canal de ticket");*/

    const embed = new Discord.RichEmbed()
    .setDescription("Se tiver certeza que deseja fechar o ticket digite `confirmar`.")
    .setFooter("Se não digitar, após 10 segundos o fechamento será expirado.")
    .setColor("#FF8000")
    .setTimestamp()

    message.reply(embed)/*(`
🤔 Se tiver certeza que deseja fechar o ticket digite **confirmar**. 
⌛ Se não digitar, após 10 segundos o fechamento será expirado.`)*/.then((m) => {
      message.channel.awaitMessages(response => response.content === 'confirmar', {
        max: 1,
        time: 10000,
        errors: ['time'],
      })
      .then((collected) => {
          message.channel.delete();
        })
        .catch(() => {
          const embed2 = new Discord.RichEmbed()
          .setDescription(`O fechamento do ticket expirou, o ticket não foi fechado.`)
          .setColor("#FF8000")
          .setTimestamp()
          message.reply(embed2)/*('⏱ O fechamento do ticket expirou, o ticket não foi fechado.')*/.then(m2 => {
              m.delete();
              m.user.send("teste")
          }, 3000);
        });
    })
    
}

module.exports.config = {

  name: "close",
  aliases: ["fechar", "finalizar"]
}