// replace "process.env.token" with token if you are not planning to host on heroku //
// DO NOT MODIFY ANYTHING ELSE IN HERE OR THE BOT MIGHT BREAK //

const Discord = require("discord.js");
Discord.Constants.DefaultOptions.ws.properties.$browser = "Discord Android"
const command_handler = require("./commands");
const {
    prefix,
    token
} = require('./conf/config.json');
const {
    version
} = require('./package.json');

const client = new Discord.Client();

client.once('ready', () => {
    console.log('Novus Bot Status: Online');
    console.log(`Version: ${version}`);
    command_handler.initCommands(client);
    client.user.setActivity(`${prefix}help (${version})`, { type: 'WATCHING' })
  .then(presence => console.log(`Bot presence: ${presence.activities[0].name}. Hold CTRL + C to shut down the bot.`))
  .catch(console.error);
});

client.on('message', (message) => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(' ');
    const name = args.shift().toLowerCase();
    command_handler.execute(name, message ,args ,client)
});

client.login(process.env.token);
