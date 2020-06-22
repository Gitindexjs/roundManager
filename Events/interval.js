//exports

module.exports.run = (discord, client) => {
    setInterval(() => {
        let guilds = 0;
        let serverend = "";
        client.guilds.cache.forEach(guild => guilds++);
        if(guilds === 1 ? serverend = "server" : serverend = "servers");
        console.log(`logged in as ${client.user.tag}`);
        client.user.setPresence({
            status: "online", 
            activity: {
                type: "STREAMING", 
                name: `help | ${guilds} ${serverend}`,
                url: "https://www.twitch.tv/tapl"
            }
        });
    }, 600000);
}