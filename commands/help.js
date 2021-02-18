const Discord = require('discord.js');

module.exports = {
    name: "help",
    async run(message, args, client) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('Help')
        .setDescription('All commands')
        .addFields(
            {name: '``` ```', value: 'Fun Commands:'},
            {name: 'Kill victims (kill)', value: 'kill mentioned user'},
            {name: 'Grave (rip)', value: 'generates a grave'},
            {name: 'BIH (bih)', value: 'generates a bih grave'},
            {name: '``` ```', value: 'Other Commands:'},
            {name: 'Kick (kick)', value: 'kicks mentioned person'},
            {name: 'Ban (ban)', value: 'bans mentioned person'},
            {name: 'Clear (clear)', value: 'kicks mentioned person'},
            {name: 'Ping (ping)', value: 'gets current ping in ms'},
            {name: 'Hackban (hackban)', value: "bans user that aren't in the server. Useful to avoid ban evasion. "},
            {name: '``` ```', value: 'Info:'},
            {name: `Novus's Bot JS`, value: 'This bot is getting FULLY rewritten but theres bugs all over the place. submit feedback on our discord server.'},
            {name: 'Discord Server', value: 'join our server at https://discord.gg/4n7Wwqz'},
            {name: 'GitHub Repository', value: 'fork the bot on GitHub https://github.com/novusthedev/novus-bot'}
            )
        .setFooter(`Prefix: ?`);
        message.channel.send(newEmbed)
    }
}