const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    if(args[0] == 'Rias'){
            const embed = new Discord.RichEmbed()
            embed.setColor('#a61416')
            embed.addField('❯\u2000\Nome:', 'Rias Gremory', false)
            embed.setDescription('Rias é uma estudante do ensino médio na Kuoh Academy, local onde, sem o consentimento da maioria dos alunos, há anjos, demônios e anjos caídos como boa parte de sua população escolar. A obra retrata um mundo no qual três raças muito poderosas disputam o poder e o domínio de tudo, sendo elas: demônios, anjos e anjos caídos, os quais possuem características únicas e importantes, que lhe auxiliam bastante em seus constantes confrontos. Sendo Rias Gremory uma das principais da obra, seu desenvolvimento e poder são demasiadamente bons')
            embed.addField('❯\u2000\Espécie', 'Demonio de Sangue Puro', true)
            embed.addField('❯\u2000\Idade', '18', true)
            embed.addField('❯\u2000\Altura', '1,72m', true)
            embed.addField('❯\u2000\Afiliação', 'Clã Gremory', true)
            embed.addField('❯\u2000\Status', 'Viva', true)
            embed.addField('❯\u2000\Rank:', 'Demonio de Alta classe',true)
            embed.setImage('https://vignette.wikia.nocookie.net/highschooldxd/images/6/61/Volume_20_-_Rias.jpg/revision/latest?cb=20150719063126');
            embed.setFooter('❯\u2000\RiasBot', client.user.avatarURL).setTimestamp();
            message.channel.send(embed);
    }
}