const Discord = require('discord.js');

module.exports = {
    name: "clear",
    async run(message, args, client) {
        if(message.member.hasPermission("MANAGE_MESSAGES")) {
        if(!args[0]) return message.reply("Please insert a number of messages to clear!");
        if(isNaN(args[0])) return message.reply("Amount is not a number!")
        if(args[0] > 100) return message.reply("The max number of messages to clear is 100!");
        if(args[0] < 1) return message.reply("the number of messages has to be greater than 0")

        await message.channel.messages.fetch({limit: args[0]}).then(messages => {
            message.channel.bulkDelete(messages);
        })
        
       }
       else
        message.channel.send("Error: no such permission!")
        }
    }
