// main imports

const config = require("../config.json");

// cmds imports

const help = require('../cmds/help');
const kick = require('../cmds/kick');
const ban = require('../cmds/ban');

// exports

module.exports.run = (discord, client) => {
    client.on("message", async msg => {
        const content = msg.content;
        const args = content.substring(config.prefix.length).split(" ");
        if(!content.startsWith(config.prefix)) return;
        switch(args[0]){
            case "help":
                help.run(discord, client, msg, args);
            break;
            case 'kick':
                kick.run(discord, client, msg, args);
            break;
            case 'ban':
                ban.run(discord, client, msg, args)
            break;
        }
    })
}