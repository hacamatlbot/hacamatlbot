const Discord = require("discord.js");
const bot = new Discord.Client();
const client = new Discord.Client();

bot.on('ready', () => {
    console.log('bot göreve hazir!')
}
);

bot.on('message', msg => {
    if (msg.content.toLowerCase() === 'sa') {
      msg.reply('Aleyküm Selam, Hoş Geldiniz!');
    }
  });

  client.on('guildMemberAdd', member => {
    member.addRole(member.guild.roles.find(r => r.name.startsWith('Üye')));
    const channel = member.guild.channels.find('name', 'log');
    if (!channel) return;
   const embed = new Discord.RichEmbed()
   .setColor('RANDOM')
   .setAuthor(member.user.tag, member.user.avatarURL || member.user.defaultAvatarURL)
   .setThumbnail(member.user.avatarURL || member.user.defaultAvatarURL)
   .setTitle('Üye katıldı;')
   .setDescription(`Sunucuya katıldı [${member.guild.memberCount} üye]!`)
   .setFooter('HacamatTVBot Premium', client.user.avatarURL)
   .setTimestamp()
   channel.send(embed);
  });

bot.login("Token")



bot.on('message' , message => {
    if (message.content === "spam") {
                                message.channel.send(`s.a`)
        message.channel.send(`s.a`)
                message.channel.send(`s.a`)
        message.channel.send(`s.a`)
                message.channel.send(`s.a`)
        message.channel.send(`s.a`)
                message.channel.send(`s.a`)   
        message.channel.send(`s.a`)
                message.channel.send(`s.a`)
        message.channel.send(`s.a`)
                message.channel.send(`s.a`)
        message.channel.send(`s.a`)
                message.channel.send(`s.a`)       
        message.channel.send(`s.a`)
                message.channel.send(`s.a`)
        message.channel.send(`s.a`)
                message.channel.send(`s.a`)
        message.channel.send(`s.a`)
                message.channel.send(`s.a`) 
        message.channel.send(`s.a`)
                message.channel.send(`s.a`)
        message.channel.send(`s.a`)
                message.channel.send(`s.a`)
        message.channel.send(`s.a`)
                message.channel.send(`s.a`)     
        message.channel.send(`s.a`)
                message.channel.send(`s.a`)
        message.channel.send(`s.a`)
                message.channel.send(`s.a`)
        message.channel.send(`s.a`) 
                message.channel.send(`s.a`)
        message.channel.send(`s.a`)
                message.channel.send(`s.a`)
        message.channel.send(`s.a`)
                message.channel.send(`s.a`)
        message.channel.send(`s.a`)                                                
    }
}
);
