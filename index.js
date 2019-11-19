const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = 'r!';

client.on('message', (message) =>{
    let msg = message.content.toUpperCase();
    let sender = message.author;
    let args = message.content.slice(prefix.length).trim().split(" ");
    let cmd = args.shift().toLowerCase();
    if(sender.bot) return;
    if(!message.content.startsWith(prefix)) return;
    try{
        let commandFile = require(`./commands/${cmd}.js`);
        commandFile.run(client, message, args, sender);
    } catch (e){
        //console.log(e.message)
    }
    try{
        let commandFile = require(`./nsfw/${cmd}.js`);
        commandFile.run(client, message, args, sender);
    } catch (e){
        //console.log(e.message)
    }
    try{
        let commandFile = require(`./music/${cmd}.js`);
        commandFile.run(client, message, args, sender);
    } catch (e){
        //console.log(e.message)
    }
});
client.on('ready', () =>{
    client.user.setActivity(`r!help | estou em ${client.guilds.size} servidores `, { type: 'PLAYING' });
    console.log("Estou em: " + client.guilds.size + " Servidores ");
		//var list = client.guilds.array().sort();
	//console.log("Available Servers: " + list);
})

client.login("SEU TOKEN");
