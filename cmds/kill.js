
module.exports.run = (discord, client, msg, args) => {
    try{
        if(!args[1]){
            return msg.reply('You did not provide a user')
        }
    else{
        let killMember = msg.mentions.members.first() ||msg.guild.members.cache.find(member => member.user.tag === args.slice(1).join(' ').toLowerCase()) ||msg.guild.members.cache.find(member => member.nickname === args.slice(1).join(' ').toLowerCase()) || msg.guild.members.cache.find(member => member.user.username === args.slice(1).join(' ').toLowerCase())
        let killEmbed = new discord.MessageEmbed()
            .addField()
    }    
    } catch(err){
      console.log(err);
      msg.reply("internal error please report!");
    }
  }