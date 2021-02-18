const Discord = require('discord.js');

module.exports = {
    name: "help",
    async run(message, args, client) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('Help')
        .setDescription('All commands')
        .addFields(
            {name: '*Fun Commands*', value: 'The list of fun commands:'},
            {name: 'Kill victims (kill)', value: 'kill mentioned user (BETA)'},
            {name: '*Other Commands*', value: 'The list of other commands:'},
            {name: 'Kick (kick)', value: 'kicks mentioned person'},
            {name: 'Ban (ban)', value: 'bans mentioned person'},
            {name: 'Clear (clear)', value: 'kicks mentioned person'},
            {name: 'Ping (ping)', value: 'gets current ping in ms'},
            {name: '*Other info*', value: 'contact me and important info:'},
            {name: "Novus's Bot JS", value: 'This bot is getting FULLY rewritten but theres bugs all over the place. submit feedback on our discord server.'},
            {name: 'Discord Server', value: 'join our server at https://discord.gg/4n7Wwqz'}
            )
        .setFooter(`prefix: ?`);
        message.channel.send(newEmbed)
    }
}