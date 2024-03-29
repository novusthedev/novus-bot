const Discord = require('discord.js');

const { SlashCommandBuilder } = require('@discordjs/builders');

const {SafeMode} = require('../conf/config.json');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('echo')
		.setDescription('Make me say anything in chat!')
        .addStringOption(option =>
            option.setName('message')
                .setDescription('Your message')
                .setRequired(true)),	
                async execute(interaction,message) {
                    
                    const newmsg = interaction.options.getString('message');
            
                    await interaction.reply({ephemeral: SafeMode, content: `${newmsg}`})
                },
            };