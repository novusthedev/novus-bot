const Discord = require('discord.js');

module.exports = {
    name: "ping",
    async run(message, args, client) {
        message.channel.send("if you see this for a long time something is sus goin on").then(msg => {
            const ping = msg.createdTimestamp - message.createdTimestamp;
            msg.edit(`Ping Pong! ping score is: ${ping}`);
        });
    }
}