const Discord = require("discord.js");

exports.run = async (client, message, member, args) => {

    const embed = new Discord.RichEmbed()
    .setDescription(`Você ja possui um ticket aberto ${"`"}<#${"💬ticket-"+message.author.id}>${"`"}.`)
    .setTimestamp()
    .setColor("#FF8000")


  if(message.guild.channels.exists("name", "💬ticket-" + message.author.id)) return message.reply(embed);

	let categoria = message.guild.channels.find("name", "Tickets", "category");
	if (!message.guild.channels.exists("name", "Tickets", "category")) return message.reply("🚫 Crie uma categoria com o nome: `Tickets`");
	if (!message.guild.roles.exists("name", "Suporte")) return message.reply("🚫 Crie um cargo com o nome: `Suporte`");
	message.guild.createChannel(`💬ticket-${message.author.id}`, "text").then(c => {
	c.setParent(categoria).then((settedParent) =>{


		let suport = message.guild.roles.find("name", "Suporte");
		let evertodos = message.guild.roles.find("name", "@everyone");

		c.overwritePermissions(suport, {
			SEND_MESSAGES: true,
			READ_MESSAGES: true
		});

		c.overwritePermissions(evertodos, {
			SEND_MESSAGES: false,
			READ_MESSAGES: false
		});

		c.overwritePermissions(message.author, {
			SEND_MESSAGES: true,
			READ_MESSAGES: true
		});

  const teste = new Discord.RichEmbed()
  .setDescription(`${message.author}, este canal foi criado por você com a finalidade de obter ajuda. Nossos staffers a qualquer momento virão lhe ajudar.`)
  .setTimestamp()
  .setColor("#FF8000")
		
	c.send(teste)

  const embed2 = new Discord.RichEmbed()
  .setDescription(`Seu canal de atendimento foi aberto <#${c.id}>.`)
  .setTimestamp()
  .setColor("#FF8000")

	message.reply(embed2)//(`✅ Seu ticket foi criado <#${c.id}>.`).toString();
  
	}).catch(err => {
		message.reply("⚠ Algo deu errado, tente novamente.")
	});
		}).catch(console.error);



}

module.exports.config = {

	name: "ticket",
	aliases: ["new", "criarticket"]
}