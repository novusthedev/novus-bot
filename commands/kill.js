const Discord = require('discord.js');

const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('kill')
		.setDescription('Secretly kill someone you hate so much')
        .addStringOption(option =>
            option.setName('victim')
                .setDescription('Your kill target')
                .setRequired(true)),	
                async execute(interaction,victim) {
                    
                    const killed = interaction.options.getString('victim');

                    const newEmbed = new Discord.MessageEmbed()
                    .setColor('#3D0000')
                    .setTitle('Hitman')
                    .setDescription('Welcome to hitman!')
                    .addFields(
                        {name: 'You requested to kill', value: killed},
                        {name: 'Hitman status:', value: 'Hunted victim'},
                        {name: 'Victim hiding status', value: 'Found'},
                        {name: 'Victim status', value: 'Killed'},
                        {name: 'Funeral status', value: 'You can generate a funeral by running /rip OR you can revive them by running /revive!'}
                        );
            
                    await interaction.reply({embeds: [newEmbed]})
                },
            };
