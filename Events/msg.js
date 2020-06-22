// main imports

const config = require("../config.json");

// cmds imports

const help = require('../cmds/help');

// exports

module.exports.run = (discord, client) => {
    client.on("message", async msg => {
        const content = msg.content;
        const args = content.substring(config.prefix.length).split(" ");
        switch(args[0]){
            case "help":
                help.run(discord, client, msg, args);
            break;
        }
    })
}