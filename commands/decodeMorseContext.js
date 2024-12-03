const Discord = require('discord.js');

const { ContextMenuCommandBuilder } = require('@discordjs/builders');

const { SafeMode } = require('../conf/config.json');

const morjs = require(`morjs`);

module.exports = {
	data: new ContextMenuCommandBuilder()
		.setName('Decode Morse Code')
		.setType(Discord.ApplicationCommandType.Message)
		.setIntegrationTypes(1)
		.setContexts(0, 1, 2),
	async execute(interaction) {

		try {
			const msg = interaction.targetMessage;
			const decodedText = morjs.decode(`${msg}`, {mode: 'simple'})

			const GenResult = new Discord.EmbedBuilder()
			.setTitle('Morse code decoded')
			.setColor("Red")
			.setDescription("```" + `${decodedText}` + "```")

		interaction.reply({ ephemeral: SafeMode, embeds: [GenResult] });
		}
		catch (err) {
			console.warn(err)
			await interaction.reply({ephemeral: true, content: "There was an error during the command!"})
		};

	},
};