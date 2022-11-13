const Discord = require('discord.js');
const plist = require('plist');
var os = require('os');
var osutils = require('os-utils');

const { SlashCommandBuilder } = require('@discordjs/builders');

const {SafeMode} = require('../conf/config.json');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('specs')
		.setDescription('Displays the bots hosting specs.'),
                async execute(interaction) {

					var uptime = osutils.sysUptime();

					let totalSeconds = (uptime);
					let days = Math.floor(totalSeconds / 86400);
					totalSeconds %= 86400;
					let hours = Math.floor(totalSeconds / 3600);
					totalSeconds %= 3600;
					let minutes = Math.floor(totalSeconds / 60);
					let seconds = Math.floor(totalSeconds % 60);
					var free_memory = osutils.freemem();
					var total_memory = osutils.totalmem();

					var osplat = os.platform();
					var osrel = os.release();

					var free_mem_in_kb = free_memory/1024;
					var free_mem_in_mb = free_mem_in_kb/1024;
					var free_mem_in_gb = free_mem_in_mb/1024;
					
					var total_mem_in_kb = total_memory/1024;
					var total_mem_in_mb = total_mem_in_kb/1024;
					var total_mem_in_gb = total_mem_in_mb/1024; 

                    const newEmbed = new Discord.EmbedBuilder()

                    .setColor('#ADC178')
                    .setTitle('Bot hosting specs')
                    .setDescription('Displays the bots hosting specs.')
                    .addFields(
			{name: 'Operating System:', value: `${osplat} ${osrel}`},
			{name: 'System uptime:', value: `${days}d, ${hours}h, ${minutes}m, ${seconds}s`},
			{name: 'CPU count:', value: `${osutils.cpuCount()} cores`},
			{name: 'CPU usage (1m):', value: `${osutils.loadavg(1)}%`, inline: true},
			{name: 'CPU usage (5m):', value: `${osutils.loadavg(5)}%`, inline: true},
			{name: 'CPU usage (15m):', value: `${osutils.loadavg(15)}%`, inline: true},
			{name: 'Memory usage:', value: `${Math.round(free_memory)}MB/${Math.round(total_memory)}MB`},
                        );
		
                    await interaction.reply({ephemeral: SafeMode, embeds: [newEmbed]})
                },
            };
