const Discord = require('discord.js');

const { SlashCommandBuilder } = require('@discordjs/builders');



module.exports = {
	data: new SlashCommandBuilder()
		.setName('tomb')
		.setDescription('Create a tombstone for anyone')
		.setIntegrationTypes(1)
		.setContexts(0, 1, 2)
		.addStringOption(option =>
			option.setName('line1')
				.setDescription('Line 1 of the tombstone')
				.setRequired(true))
		.addStringOption(option =>
			option.setName('line2')
				.setDescription('Line 2 of the tombstone')
				.setRequired(false))
		.addStringOption(option =>
			option.setName('line3')
				.setDescription('Line 3 of the tombstone')
				.setRequired(false))
		.addStringOption(option =>
			option.setName('line4')
				.setDescription('Line 4 of the tombstone')
				.setRequired(false)),
	"intergration_types": [0, 1],
	"contexts": [0, 1, 2],
	async execute(interaction, name) {

		try {
			var name1 = interaction.options.getString('line1');
			var name2 = interaction.options.getString('line2');
			var name3 = interaction.options.getString('line3');
			var name4 = interaction.options.getString('line4');

			if (name1 == null) {
				name1 = "+"
			};
			if (name2 == null) {
				name2 = "+"
			};
			if (name3 == null) {
				name3 = "+"
			};
			if (name4 == null) {
				name4 = "+"
			};

			var date = new Date()
			var year = date.getFullYear()
			const tombmessage = new Discord.EmbedBuilder()
				.setTitle('Generated Tombstone')
				.setImage(`http://www.tombstonebuilder.com/generate.php?top1=${name1}&top2=${name2}&top3=${name3}&top4=${name4}&sp=`.replaceAll(" ", "+"));

			await interaction.reply({ embeds: [tombmessage] })
		}
		catch (err) {
			console.warn(err)
			await interaction.reply({ephemeral: true, content: "There was an error during the command!"})
		};

	},
};