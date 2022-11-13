const Discord = require('discord.js');


const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('stats')
		.setDescription('Bot status from the Novus Bot HQ.'),
                async execute(interaction) {

					let totalSeconds = (interaction.client.uptime / 1000);
					let days = Math.floor(totalSeconds / 86400);
					totalSeconds %= 86400;
					let hours = Math.floor(totalSeconds / 3600);
					totalSeconds %= 3600;
					let minutes = Math.floor(totalSeconds / 60);
					let seconds = Math.floor(totalSeconds % 60);


                    const {
    version
} = require('../package.json');

                    const newEmbed = new Discord.MessageEmbed()

                    .setColor('#ADC178')
                    .setTitle('Novus Bot status')
                    .setDescription('Bot status from the Novus Bot HQ.')
                    .addFields(
                        {name: 'Client Ping:', value: `${Date.now() - interaction.createdTimestamp}ms`},
			{name: 'Bot Uptime:', value: `${days}d, ${hours}h, ${minutes}m, ${seconds}s`},
			{name: 'Bot Version:', value: `${version}`},
                        );
		
                    await interaction.reply({ephemeral: true, embeds: [newEmbed]})
                },
            };
