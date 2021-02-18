const Discord = require('discord.js');

module.exports = {
    name: "bih",
    async run(message, args, client) {
        if(!args[0]) return message.reply("pls put anything to your message!");
        const ripmsg = args[0]

        let image = new Discord.MessageAttachment(`http://www.tombstonebuilder.com/generate.php?top1=B.I.H&top2=&top3=${ripmsg}&top4=?+-+2021&sp=`, "rip.png")
        message.channel.send(image);
    }
}