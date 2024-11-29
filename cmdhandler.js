const Discord = require('discord.js');
const  fs = require('fs');
const path = require('node:path');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const {token} = require('./conf/token.json');
const {clientId} = require('./conf/clientId.json');

const commands = [];
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	commands.push(command.data.toJSON());
}

const rest = new REST({ version: '9' }).setToken(token);

module.exports = {
    async StartSystem() {
        try {
            console.log('Loading commands & syncing to Discord.');
    
            await rest.put(
                Routes.applicationCommands(clientId),
                { body: commands },
            );        
    
            console.log('Commands loaded & synced!');
            console.log('Now listening to users.');
        } catch (error) {
            console.error("An error occurred.");
            console.error(error);
            console.error("Please check the clientId.json file inside the conf folder and see if you're using the correct ID for your bot.");
        }
    },

    async initCommands(client) {
        client.commands = new Discord.Collection();

        const commandFiles = (await fs.promises.readdir('./commands', {
            encoding: 'utf-8'
        })).filter(f => f.endsWith('js'));

        for(const file of commandFiles) {
            const command = require(`./commands/${file}`);
            try {
                client.commands.set(command.data.name, command);
            } catch(err) {
                console.error(err)
            }
        }
    },
    
    async execute(name, interaction, args, client) {
        const command = client.commands.get(name) || client.commands.find(c => c.allases && c.allases.Includes(name));
        

	if(!command) return;
        try {
            command.run(interaction, args, client);
        }
        catch(err) {
            console.warn(err);
        }
    }
}