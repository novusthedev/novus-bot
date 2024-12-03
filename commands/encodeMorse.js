const Discord = require('discord.js');

const { SlashCommandBuilder } = require('@discordjs/builders');

const { SafeMode } = require('../conf/config.json');

const morjs = require(`morjs`);

module.exports = {
	data: new SlashCommandBuilder()
		.setName('encode-morse')
		.setDescription('Encode text into morse code.')
		.setIntegrationTypes(1)
		.setContexts(0, 1, 2)
		.addStringOption(option =>
			option.setName('text')
				.setDescription('Text to be encoded.')
				.setRequired(true)),
	"intergration_types": [0, 1],
	"contexts": [0, 1, 2],
	async execute(interaction,) {

		try {
			const text = interaction.options.getString('text');
			const encodedText = morjs.encode(`${text}`, {mode: 'simple'})

			const GenResult = new Discord.EmbedBuilder()
						.setTitle('Morse code encoded')
						.setColor("Green")
						.setDescription("Original\n```" + `${text}` + "```\n"+"Encoded\n```" + `${encodedText}` + "```")

					interaction.reply({ ephemeral: SafeMode, embeds: [GenResult] });

		}
		catch (err) {
			console.warn(err)
			await interaction.reply({ ephemeral: true, content: "There was an error during the command!" })
		};

	},
};