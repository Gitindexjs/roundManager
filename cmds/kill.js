// exports 

module.exports.run = (discord, client, msg, args) => {
    try{
        if(!args[1]){
            return msg.reply('You didn\'t provide a user')
        } else {
            let killMember = msg.mentions.members.first() ||msg.guild.members.cache.find(member => member.user.tag === args.slice(1).join(' ').toLowerCase()) ||msg.guild.members.cache.find(member => member.nickname === args.slice(1).join(' ').toLowerCase()) || msg.guild.members.cache.find(member => member.user.username === args.slice(1).join(' ').toLowerCase())
            let killEmbed = new discord.MessageEmbed()
                .addField("killer", msg.member)
                .addField("victim", killMember)
                .setTitle("Kill")
                .setThumbnail(killMember.user.avatarURL({format: "png"}))
                .setURL('https://www.liablecode.com')
                .setColor("RANDOM")
                .setFooter(`${client.user.username} ©`, client.user.avatarURL({format: "png"}))
            msg.channel.send(killEmbed);
        }    
    } catch(err) {
      console.log(err);
      msg.reply("internal error please report!");
    }
  }