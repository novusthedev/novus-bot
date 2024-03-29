const Discord = require('discord.js');

const { SlashCommandBuilder } = require('@discordjs/builders');

const { ActionRowBuilder, ButtonBuilder } = require('discord.js');

const {clientId} = require('../conf/clientId.json');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('List of all commands'),
	async execute(interaction) {
        
        const newEmbed = new Discord.EmbedBuilder()
        .setColor('#304281')
        .setTitle('<:novus_bot:1041436866458701864> Novus Bot Help')
        .setDescription('All commands you can currently use as of now. Only supports slash `/` commands!')
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
        
 const invite = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
					.setLabel('Invite us to your server!')
					.setStyle('Link')
					.setEmoji('1041436866458701864')
                    .setURL(`https://discordapp.com/oauth2/authorize?client_id=${clientId}&scope=bot&permissions=2146958847`),
			);

 const github = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
					.setLabel('View source on GitHub!')
					.setStyle('Link')
					.setEmoji('1041437586331271208')
                    .setURL('https://github.com/novusthedev/novus-bot'),
			);

        await interaction.reply({ ephemeral: true, components: [invite, github], embeds: [newEmbed]});
	},
};