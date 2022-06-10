// DO NOT MODIFY ANYTHING ELSE IN HERE OR THE BOT MIGHT BREAK //

const { Client, Intents } = require('discord.js');
const fs = require('node:fs');
const path = require('node:path');
const command_handler = require("./cmdhandler");
const {token} = require('./conf/token.json');
const {
    version
} = require('./package.json');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const { Collection } = require('discord.js')

client.commands = new Collection();
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	// Set a new item in the Collection
	// With the key as the command name and the value as the exported module
	client.commands.set(command.data.name, command);
}



client.once('ready', () => {
    console.log('Novus Bot has started!');
    console.log(`Version: ${version}`);
    command_handler.initCommands(client);
    client.user.setPresence({ activities: [{ name: `with commands | Version: ${version}` }], status: 'online' });
  console.log(presence => console.log(`Bot presence: ${presence.activities[0].name}. Hold CTRL + C to shut down the bot.`))
});

client.login(token);

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});