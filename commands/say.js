const Discord = require('discord.js');

const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('say')
		.setDescription('Make me say anything in a private/group chat!')
        .addStringOption(option =>
            option.setName('message')
                .setDescription('Your message')
                .setRequired(true))
                .setIntegrationTypes(1)
                .setContexts(1,2),
                async execute(interaction,message) {
                    

                    try {
                        const newmsg = interaction.options.getString('message');
            
                        await interaction.reply({content: `${newmsg}`})
                    }
                    catch (err) {
                        console.warn(err)
                        await interaction.reply({ephemeral: true, content: "There was an error during the command!"})
                    };

                },
            };