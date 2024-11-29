const Discord = require('discord.js');

const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('revive')
        .setDescription('Secretly revive someone you love so much')
        .setIntegrationTypes(1)
        .setContexts(0, 1, 2)
        .addStringOption(option =>
            option.setName('victim')
                .setDescription('Your revival target')
                .setRequired(true)),
    "intergration_types": [
        0,
        1
    ],
    "contexts": [0, 1, 2],
    async execute(interaction, victim) {

        try {
            const killed = interaction.options.getString('victim');

            const newEmbed = new Discord.EmbedBuilder()
                .setColor('#B8E0D4')
                .setTitle('Heaven')
                .setDescription('Welcome to heaven!')
                .addFields(
                    { name: 'You are wanting to revive:', value: killed },
                    { name: 'Judges:', value: 'God & Jesus' },
                    { name: 'Revival status:', value: 'Approved!' },
                    { name: 'Victim status', value: 'Revived!' },
                    { name: 'What now?', value: 'You can live like normal but with that person being alive again! Thanks for playing heaven!' }
                );

                await interaction.reply({embeds: [newEmbed]})
        }
        catch (err) {
			console.warn(err)
			await interaction.reply({ephemeral: true, content: "There was an error during the command!"})
		};

    },
};
