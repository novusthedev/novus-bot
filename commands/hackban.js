const Discord = require('discord.js');

module.exports = {
    name: "hackban",
    async run(message, args, client) {
        if(!message.member.hasPermission("BAN_MEMBERS")) {
            message.channel.send("Error: no such permission!")}

            let userID = args[0];
            let reason = args.slice(1).join(" ");

            {if(!userID) return message.channel.send("No user id detected!");
            if(isNaN(userID)) return message.channel.send("No user id detected!")
            if(userID === message.author.id) return message.channel.send("You cannot hackban yourself! just leave the server instead")
            if(userID === client.user.id) return message.channel.send("hey! i know what you're doing! and i stopped it!")

            if (!reason) reason = "Hackbanned"

            client.users.fetch(userID).then(async user => {
                await message.guild.members.ban(user.id, {reason: reason});
                return message.channel.send(`**${user.tag}** has been hackbanned.`);
            }).catch(error => {
            return message.channel.send("an unknown error has occurred. if you think its a bug please report it on our github repo: https://github.com/novusthedev/novus-bot/issues");
            })
            }
        }
    }