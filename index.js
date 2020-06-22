// main imports

const discord = require('discord.js')


// initialising objects

const client = new discord.Client();

// internal imports

const ready = require('./Events/ready');
const msg = require('./Events/msg');
const interval = require('./Events/interval');

// runs

interval.run(discord, client);
ready.run(discord, client);
msg.run(discord, client);

// login

client.login(process.env.TOKEN)