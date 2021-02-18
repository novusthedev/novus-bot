const Discord = require('discord.js');

module.exports = {
    name: "kick",
    async run(message, args, client) {
        if(message.member.hasPermission("KICK_MEMBERS")) {
            let member = message.mentions.members.first()
            if(!member) message.channel.send("pls mention somebody to kick!")
            else
            member.kick().then(mem => {
                message.channel.send(`Kicked ${mem.user.username} with no errors!`)
            })
        } else
        message.channel.send("Error: no such permission!")
        }
    }