const Discord = require("discord.js");
const bot = new Discord.Client;
const {token, prefix} = require("./botconfig.json");

bot.on("ready", async => {
 console.log(`Бот под именем ${bot.user.tag} запущен`)
});

bot.login(token)