const Discord = require('discord.js');

const { ContextMenuCommandBuilder } = require('@discordjs/builders');



module.exports = {
	data: new ContextMenuCommandBuilder()
		.setName('User Information')
		.setType(Discord.ApplicationCommandType.User)
		.setIntegrationTypes(1)
		.setContexts(0, 1, 2),
	async execute(interaction) {

		try {
			const user = interaction.targetUser;

			const infoMsg = new Discord.EmbedBuilder()
				.setTitle(`${user.displayName}`)
				.setThumbnail(user.avatarURL(({ size: 1024, dynamic: true })))
				.setImage(user.bannerURL({dynamic: true}))
				.setFooter({text: "Time & Dates are based on the bot host's location."})
				.addFields(
					{ name: 'Username:', value: `${user.username}` },
					{ name: 'User ID:', value: `${user.id}` },
					{ name: 'Joined Discord:', value: `${user.createdAt}` },
					{ name: 'App:', value: `${user.bot}` },
					{ name: 'System:', value: `${user.system}` },
				);

			await interaction.reply({ embeds: [infoMsg] })
		}
		catch (err) {
			console.warn(err)
			await interaction.reply({ephemeral: true, content: "There was an error during the command!"})
		};

	},
};