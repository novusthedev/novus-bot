const Discord = require('discord.js');

const { SlashCommandBuilder } = require('@discordjs/builders');

const { MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('List of all commands'),
	async execute(interaction) {
        
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('Help')
        .setDescription('All commands')
        .addFields(
            {name: 'Fun Commands', value: 'Mess with funny commands'},
	    {name: 'Make me say anything! ```/echo``` ```<message>```', value: 'Makes me say anything.'},
            {name: 'Kill victims ```/kill``` ```<victim>```', value: 'kill anyone (does not have to be a user!)'},
            {name: 'Tombstone ```/tomb``` ```<line1> <line2> <line3> <line4>```', value: 'generates a tombstone up to 4 lines.'},
            {name: 'Revive somebody ```/revive``` ```<name>```', value: 'revives somebody'},
            {name: 'Bot Information', value: 'Debug info & Ways to support Novus Bot'},
            {name: 'Bot Status ```/stats```', value: 'Generates current status directly from the bot.'},
	    {name: 'Bot Host Status ```/specs```', value: 'Generates current host status directly from the bots host system.'},
            {name: "Novus Bot News", value: 'Upgraded the discord.js libraries to v14! With latest features & better performance.'},
            {name: 'GitHub Repository', value: 'View and fork the source code for Novus Bot and help improve the project by reporting bugs!'}
            );

 const github = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setLabel('View source on GitHub!')
					.setStyle('LINK')
                    .setURL('https://github.com/novusthedev/novus-bot'),
			);

        await interaction.reply({ ephemeral: true, components: [github], embeds: [newEmbed]});
	},
};
