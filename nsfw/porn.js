const Discord = require('discord.js');
const booru = require('pornpics');

module.exports.run = async (client, message, args) => {
    const crawler = new booru({
        url: 'https://www.pornpics.com/ebony/',
        page: 1,
        limit: 1,
        aggregate: true,
        cover: false
    })

    crawler.on('url', gallery => {
        message.channel.send(`'${gallery.url}' cute`) // gallery picture links are in gallery.pictures
      })

      

    //crawler.saveGallery({title:'pusse', pictures: , cover: false })
 /*   crawler.url('url', err =>{
        message.channel.message(err.url);
    })*/
}