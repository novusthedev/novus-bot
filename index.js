// DO NOT MODIFY ANYTHING ELSE IN HERE OR THE BOT MIGHT BREAK //

const { Client, GatewayIntentBits, Partials } = require('discord.js');
const readline = require(`readline`)
const fs = require('node:fs');
const path = require('node:path');
const command_handler = require("./cmdhandler");
const {token} = require('./conf/token.json');
const {
    version
} = require('./package.json');
const {SafeMode} = require('./conf/config.json');

const Terminal = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

const client = new Client({ intents: [GatewayIntentBits.Guilds], partials: [Partials.Channel] });
const { Collection } = require('discord.js');
const { ActivityType } = require('discord-api-types/v9');

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
	console.log(`Version: ${version}`);
    console.log(`Safe mode enabled? ${SafeMode}`);
    client.user.setPresence({ activities: [{type: ActivityType.Custom, name: `Run /help for commands.` }], status: 'online' });
	command_handler.initCommands(client);
	CommandLine()
});

client.login(token);

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand() || !interaction.isContextMenuCommand) return;

	const command = client.commands.get(interaction.commandName);
	const ExecUser = interaction.user

	if (!command) return;

	try {
		console.log(`${ExecUser.username}@${ExecUser.id}: ${interaction.commandName}`)
		CommandLine()
		await command.execute(interaction);
	} catch (error) {
		console.warn(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});

function CommandLine(){
	Terminal.question("$: ", tOut => {
		
		// Basic Commands
		if (tOut == "clear") {
            console.clear()
        }
		else if (tOut == "exit") {
            process.exit()
        }
		else if (tOut == "refresh") {
            command_handler.initCommands(client);
        }
		else {
			console.error(`${tOut}: Command not found.`)
		}

		// Return to command line after execution
		CommandLine()
	})
}

// Shut Down

function ShutDown() {
	console.log("Cleaning up...")
	client.destroy()
};

process.on('exit', () => {
	ShutDown()
  });
  