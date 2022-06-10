const Discord = require('discord.js');

const { SlashCommandBuilder } = require('@discordjs/builders');

const { MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('List of all commands'),
	async execute(interaction) {
        
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('Help')
        .setDescription('All commands')
        .addFields(
            {name: 'Fun Commands', value: 'Mess with funny commands'},
            {name: 'Kill victims (kill)', value: 'kill anyone (does not have to be a user!)'},
            {name: 'Grave (rip)', value: 'generates a grave'},
            {name: 'Bot Information', value: 'Debug info & Ways to support Novus Bot'},
            {name: "Novus Bot News", value: 'New upgrades with new security improvments after a year of no new releases!'},
            {name: 'GitHub Repository', value: 'View and fork the source code for Novus Bot and help improve the project by reporting bugs!'}
            );
        
 const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setLabel('Favorite Novus Bot on GitHub!')
					.setStyle('LINK')
                    .setURL('https://github.com/novusthedev/novus-bot'),
			);

        await interaction.reply({ content: 'Novus Bot Help', ephemeral: true, components: [row], embeds: [newEmbed]});
	},
};
