const Discord = require('discord.js');


const { SlashCommandBuilder } = require('@discordjs/builders');

const {SafeMode} = require('../conf/config.json');

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

                    const newEmbed = new Discord.EmbedBuilder()

                    .setColor('#ADC178')
                    .setTitle('<:novus_bot:1041436866458701864> Novus Bot status')
                    .setDescription('Bot status from the Novus Bot HQ.')
                    .addFields(
			{name: 'Bot Version:', value: `${version}`},
			{name: 'Safe mode enabled:', value: `${SafeMode}`},
                        {name: 'Client Ping:', value: `${Date.now() - interaction.createdTimestamp}ms`},
			{name: 'Bot Uptime:', value: `${days}d, ${hours}h, ${minutes}m, ${seconds}s`},
                        );
		
                    await interaction.reply({ephemeral: SafeMode, embeds: [newEmbed]})
                },
            };
