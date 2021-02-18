const Discord = require("discord.js");
const command_handler = require("./commands");
const {
    prefix,
    token
} = require('./conf/config.json');

const client = new Discord.Client();

client.once('ready', () => {
    console.log('Novus Bot Status: Online');
    command_handler.initCommands(client);
    client.user.setActivity('on 2.0.0A', { type: 'WATCHING' })
  .then(presence => console.log(`Novus Bot Version ${presence.activities[0].name}. Hold CTRL + C to shut down the bot.`))
  .catch(console.error);
});

client.on('message', (message) => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(' ');
    const name = args.shift().toLowerCase();
    command_handler.execute(name, message ,args ,client)
});

client.login(token);