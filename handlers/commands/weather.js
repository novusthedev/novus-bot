const Discord = require('discord.js');
const commands = require('../../commands');
const weather = require('weather-js')

module.exports = {
    name: "weather",
    async run(message, args, client) {
        let city = args.join(" ");
        let degreetype = "C";

        await weather.find({
            search: city,
            degreeType: degreetype
        }), function(err, result) {
            if (!city) return message.channel.send("Please insert a city")
            if (err || result === undefined || result.length === 0) return message.channel.send("Unkown city. make sure you don't make typos next time.")

            let current = result[0].current;
            let location = result[0].location;

            const newEmbed = new Discord.MessageEmbed()
            .setAuthor(current.observationpoint)
            .setDescription(`> ${current.skytext}`)
            .setThumbnail(current.imageUrl)
            .setTimestamp
            .setColor('#778899')

            
            newEmbed.addField("Latitude", location.lat, true)
            .addField("Longitude", location.long, true)
            .addField("Feels Like", `${current.feelslike}° Degrees`, true)
            .addField("Degree Type", location.degreetype, true)
            .addField("Winds", current.winddisplay, true)
            .addField("Humidity", `${current.humidity}%`, true)
            .addField("Timezone", `GMT ${location.timezone}`, true)
            .addField("Temperature", `${current.temperature}° Degrees`, true)
            .addField("Observation Time", current.observationtime, true)

            .setFooter(`Powered by weather-js`)
            message.channel.send(newEmbed);
        }
    }
}
