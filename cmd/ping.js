const Discord = require("discord.js");
const moment = require("moment");

module.exports = {
  name: "ping",
  aliases: ["ping"],
  category: "Bot",
  description: "ping",
  usage: "ping",
  cooldown: 7,
  run: async (bot, message, args, con) => {
    message.channel.send(`pong`)
  }
}