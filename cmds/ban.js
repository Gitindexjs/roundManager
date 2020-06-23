module.exports.run = (discord, client, msg, args) => {
    try{
        if(!msg.member.hasPermission("BAN_MEMBERS")) return msg.reply('You don\'t have permission to use that command!');
        let banTarget = msg.mentions.members.first() || msg.guild.members.cache.find(member => member.user.username === args[1]) || msg.guild.members.cache.find(member => member.nickname === args[1]);
        let logs = msg.guild.channels.cache.find(channel => channel.name === "logs") || msg.guild.channels.cache.find(channel => channel.name === "log");
        let banReason = args.slice(2) || "Misconduct";
        let banEmbed = new discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`Banned`)
        .setThumbnail(banTarget.user.avatarURL())
        .addField('Banned timestamp', msg.createdAt)
        .addField('Banned at', msg.channel)
        .addField('Author', `${msg.member} with an ID: ${msg.member.id}`)
        .addField('Target', `${banTarget} with an ID: ${banTarget.id}`)
        .addField('Reason', banReason)
        .setFooter(`${client.user.username} ©`, client.user.avatarURL({format: "png"}));
        if(!banTarget) return msg.reply(`user doesn't exist`);
        if(!logs) return msg.guild.channels.create("logs", {type: "text"});
        banTarget.ban(banReason);
        msg.channel.send(`${banTarget} was banned by ${msg.member} for ${banReason}`);
        logs.send(banEmbed);
    } catch(error) {
        msg.reply('Bot has missing permissions');
        console.log(error)
    }
}