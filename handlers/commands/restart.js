const Discord = require('discord.js');
// REQUIRES PM2, RUN npm i pm2 --save AND ALWAYS RUN pm2 start index.js --watch OR THIS IS GONNA SHUT DOWN THE BOT INSTEAD //
module.exports = {
    name: "restart",
    async run(message, args, client) {
        if (message.author.id !== "your id") return
        message.channel.send("Preparing to restart")
        try {
        if (message.author.id == "608478041907134464")
        await message.channel.send("Restarting...")
            process.exit()
        } catch (e) {
            console.log(e.message)
        }
    }
}
