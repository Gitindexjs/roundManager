exports.run = (discord, client, msg, args) => {
    try{
        if(!msg.member.hasPermission("KICK_MEMBERS")) return msg.reply('You don\'t have permission to use that command!');
        let kickTarget = msg.mentions.members.first() || msg.guild.members.cache.find(member => member.user.username === args[1]) || msg.guild.members.cache.find(member => member.nickname === args[1]);
        let logs = msg.guild.channels.cache.find(channel => channel.name === "logs") || msg.guild.channels.cache.find(channel => channel.name === "log");
        let kickReason = args.slice(2);
        let kickEmbed = new discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`Kicked`)
        .setThumbnail(kickTarget.user.avatarURL())
        .addField('Kicked timestamp', msg.createdAt)
        .addField('Kicked at', msg.channel)
        .addField('Author', `${msg.member} with an ID: ${msg.member.id}`)
        .addField('Target', `${kickTarget} with an ID: ${kickTarget.id}`)
        .addField('Reason', kickReason || "Misconduct")
        .setFooter(`${client.user.username} ©`, client.user.avatarURL({format: "png"}));
        if(!kickTarget) return msg.reply(`user doesn't exist`);
        if(!logs) return msg.guild.channels.create("logs", {type: "text"});
        kickTarget.kick(kickReason);
        msg.channel.send(`${kickTarget} was kicked by ${msg.member} for ${kickReason}`);
        logs.send(kickEmbed);
    } catch(error) {
        msg.reply('Bot has missing permissions');
        console.log(error);
    }
}