const Discord = require('discord.js');

const { SlashCommandBuilder } = require('@discordjs/builders');



module.exports = {
	data: new SlashCommandBuilder()
		.setName('rip')
		.setDescription('Create a tombstone for anyone (you can use any name including a users name)')
        .addStringOption(option =>
            option.setName('name')
                .setDescription('The name to put on the tombstone')
                .setRequired(true)),	
        async execute(interaction,name) {
        const ripmsg = interaction.options.getString('name');
        var date = new Date()
        var year = date.getFullYear()
        const tombmessage = new Discord.MessageEmbed()
	    .setTitle('Generated Tombstone')
	    .setImage(`http://www.tombstonebuilder.com/generate.php?top1=R.I.P&top2=&top3=${ripmsg}&top4=2021+-+${year}&sp=`.replaceAll(" ", "+"));
        
        await interaction.reply({embeds: [tombmessage]})
	},
};