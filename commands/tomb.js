const Discord = require('discord.js');

const { SlashCommandBuilder } = require('@discordjs/builders');



module.exports = {
	data: new SlashCommandBuilder()
	.setName('tomb')
		.setDescription('Create a tombstone for anyone')
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
        async execute(interaction,name) {
        const name1 = interaction.options.getString('line1');
	const name2 = interaction.options.getString('line2');
	const name3 = interaction.options.getString('line3');
	const name4 = interaction.options.getString('line4');
        var date = new Date()
        var year = date.getFullYear()
        const tombmessage = new Discord.MessageEmbed()
	    .setTitle('Generated Tombstone')
	    .setImage(`http://www.tombstonebuilder.com/generate.php?top1=${name1}&top2=${name2}&top3=${name3}&top4=${name4}&sp=`.replaceAll(" ", "+"));
        
        await interaction.reply({embeds: [tombmessage]})
	},
};