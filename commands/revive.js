const Discord = require('discord.js');

const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('revive')
		.setDescription('Secretly revive someone you love so much')
        .addStringOption(option =>
            option.setName('victim')
                .setDescription('Your revival target')
                .setRequired(true)),	
                async execute(interaction,victim) {
                    
                    const killed = interaction.options.getString('victim');

                    const newEmbed = new Discord.MessageEmbed()
                    .setColor('#B8E0D4')
                    .setTitle('Heaven')
                    .setDescription('Welcome to heaven!')
                    .addFields(
                        {name: 'You are wanting to revive:', value: killed},
                        {name: 'Judges:', value: 'God & Jesus'},
                        {name: 'Revival status:', value: 'Approved!'},
                        {name: 'Victim status', value: 'Revived!'},
                        {name: 'What now?', value: 'You can live like normal but with that person being alive again! Thanks for playing heaven!'}
                        );
            
                    await interaction.reply({embeds: [newEmbed]})
                },
            };
