// exports

module.exports.run = (discord, client) => {
    client.on("ready", () => {
        console.log(`logged in as ${client.user.tag}`);
    })
}