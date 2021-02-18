const Discord = require('discord.js');

module.exports = {
    name: "ban",
    async run(message, args, client) {
        if(message.member.hasPermission("BAN_MEMBERS")) {
            let member = message.mentions.members.first()
            if(!member) message.channel.send("pls mention somebody to ban!")
            else
            member.ban().then(mem => {
                message.channel.send(`Banned ${mem.user.username} with no errors!`)
            })
        } else
        message.channel.send("Error: no such permission!")
        }
    }