const Discord = require('discord.js');


const { SlashCommandBuilder } = require('@discordjs/builders');

const { SafeMode } = require('../conf/config.json');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('stats')
		.setDescription('Bot status from the Climatic HQ.')
		.setIntegrationTypes(1)
		.setContexts(0, 1, 2),
	async execute(interaction) {

		try {
			let totalSeconds = (interaction.client.uptime / 1000);
			let days = Math.floor(totalSeconds / 86400);
			totalSeconds %= 86400;
			let hours = Math.floor(totalSeconds / 3600);
			totalSeconds %= 3600;
			let minutes = Math.floor(totalSeconds / 60);
			let seconds = Math.floor(totalSeconds % 60);


			const {
				version
			} = require('../package.json');

			const newEmbed = new Discord.EmbedBuilder()

				.setColor('#ADC178')
				.setTitle('<:climatic:1311842271360057415> Climatic status')
				.setDescription('Bot status from the Climatic HQ.')
				.addFields(
					{ name: 'Bot Version:', value: `${version}` },
					{ name: 'Safe mode enabled:', value: `${SafeMode}` },
					{ name: 'Client Ping:', value: `${Date.now() - interaction.createdTimestamp}ms` },
					{ name: 'Bot Uptime:', value: `${days}d, ${hours}h, ${minutes}m, ${seconds}s` },
				);

			await interaction.reply({ ephemeral: SafeMode, embeds: [newEmbed] })
		}
		catch (err) {
			console.warn(err)
			await interaction.reply({ephemeral: true, content: "There was an error during the command!"})
		};

	},
};
