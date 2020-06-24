// exports

module.exports.run = (discord, client, msg, args) => {
    try {
        const embed = new discord.MessageEmbed()
            .setTitle("help")
            .addField("cmds", "help  kick  ban  kill")
            .setColor("RANDOM")
            .setFooter(`${client.user.username} ©`, client.user.avatarURL({format: "png"}));
        msg.channel.send(embed);
    } catch (err) {
        msg.reply("internal error please report!");
        console.log(err);
    }
}