// main imports

const discord = require('discord.js')


// initialising objects

const client = new discord.Client();

// internal imports

const ready = require('./Events/ready');
const msg = require('./Events/msg');

// runs

ready.run(discord, client);
msg.run(discord, client);

client.login(process.env.TOKEN)