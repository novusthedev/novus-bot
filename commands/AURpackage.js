const Discord = require('discord.js');

const { SlashCommandBuilder } = require('@discordjs/builders');

const { ActionRowBuilder, ButtonBuilder } = require('discord.js');

const AURurl = `https://aur.archlinux.org`

module.exports = {
	data: new SlashCommandBuilder()
		.setName('aur-package')
		.setDescription('Get information on an AUR package.')
		.setIntegrationTypes(1)
		.setContexts(0, 1, 2)
		.addStringOption(option =>
			option.setName('package')
				.setDescription('Name of package.')
				.setRequired(true)),
	"intergration_types": [0, 1],
	"contexts": [0, 1, 2],
	async execute(interaction,) {

		try {

			function CheckValue(val) {
				if (val != null && val != undefined) { return val } else { return "None" }
			};

			function CheckDate(val) {
				if (val != null && val != undefined) { return `<t:${val}>` } else { return "Never" }
			};

			var package = interaction.options.getString('package');

			const response = await fetch(AURurl + "/rpc/v5/info?arg[]=" + package)

			if (!response.ok) {
				await interaction.reply({ content: "Unable to reach the AUR." })
			} else {
				// get package information
				const data = await response.json();
				const PkgData = JSON.stringify(data.results[0]);

				var color = "Blue"

				if (PkgData != undefined || PkgData != null) {
					const pkg = JSON.parse(PkgData);

					if (`${CheckDate(pkg.OutOfDate)}` != "Never") {
						color = "Red"
					};

					// generate embed and send
					const pkgInfo = new Discord.EmbedBuilder()
						.setTitle("`" + `${pkg.Name} ${pkg.Version}` + "`")
						.setDescription(`${pkg.Description}`)
						.setFooter({ text: "All data provided by the AUR." })
						.setColor(`${color}`)
						.addFields(
							{ name: 'Maintainer:', value: `${CheckValue(pkg.Maintainer)}`, inline: true },
							{ name: 'Co-Maintainer(s):', value: `${CheckValue(pkg.CoMaintainers)}`, inline: true },
							{ name: 'License:', value: `${CheckValue(pkg.License)}`, inline: true },
							{ name: 'Popularity:', value: `${CheckValue(pkg.Popularity)}`, inline: true },
							{ name: 'Votes:', value: `${CheckValue(pkg.NumVotes)}`, inline: true },
							{ name: 'Depends:', value: "`" + `${CheckValue(pkg.Depends)}` + "`" },
							{ name: 'Optional Depends:', value: "`" + `${CheckValue(pkg.OptDepends)}` + "`" },
							{ name: 'Make Depends:', value: "`" + `${CheckValue(pkg.MakeDepends)}` + "`" },
							{ name: 'Conflicts:', value: "`" + `${CheckValue(pkg.Conflicts)}` + "`" },
							{ name: 'Submitted:', value: `${CheckDate(pkg.FirstSubmitted)}`, inline: true },
							{ name: 'Updated:', value: `${CheckDate(pkg.LastModified)}`, inline: true },
							{ name: 'Outdated:', value: `${CheckDate(pkg.OutOfDate)}`, inline: true },
						);

					const UpstreamURL = new ActionRowBuilder()
						.addComponents(
							new ButtonBuilder()
								.setLabel('Upstream URL')
								.setStyle('Link')
								.setURL(`${pkg.URL}`),
						);

					const DownloadURL = new ActionRowBuilder()
						.addComponents(
							new ButtonBuilder()
								.setLabel('Download Archive')
								.setStyle('Link')
								.setURL(`${AURurl}${pkg.URLPath}`),
						);

						await interaction.reply({ embeds: [pkgInfo], components: [UpstreamURL, DownloadURL] })

				} else
				{
					await interaction.reply({ content: `Package `+"`"+`${package}`+"`"+` not found.` })
				};

			};
		}
		catch (err) {
			console.warn(err)
			await interaction.reply({ ephemeral: true, content: "There was an error during the command!" })
		};

	},
};