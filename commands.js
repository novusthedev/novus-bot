// DO NOT MODIFY OR THE BOT MIGHT BREAK //

const Discord = require('discord.js');
const  fs = require('fs');

module.exports = {
    async initCommands(client) {
        client.commands = new Discord.Collection();

        const commandFiles = (await fs.promises.readdir('./handlers/commands', {
            encoding: 'utf-8'
        })).filter(f => f.endsWith('js'));

        for(const file of commandFiles) {
            const command = require(`./handlers/commands/${file}`);
            try {
                client.commands.set(command.name, command);
            } catch(err) {
                console.error(err)
            }
        }
    },
    async execute(name, message, args, client) {
        const command = client.commands.get(name) || client.commands.find(c => c.allases && c.allases.Includes(name));
        if(!command) return;
        try {
            command.run(message, args, client);
        }
        catch(err) {
            console.error(err);
        }
    }
}