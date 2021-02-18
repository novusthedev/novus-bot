const Discord = require('discord.js');

module.exports = {
    name: "kill",
    async run(message, args, client) {
        let victim = message.mentions.users.first()
        let image = new Discord.MessageAttachment("https://media.discordapp.net/attachments/765328110404632586/805620946643189810/image0.png", "kill.png")
        if(!victim) message.reply("Mention your victim then try again")
        else {
            message.channel.send(`You have killed ${victim}`)
            message.channel.send(image)
        };
    }
}