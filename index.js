const Discord = require("discord.js");
const bot = new Discord.Client;

bot.on("ready", async => {
 console.log(`Бот под именем ${bot.user.tag} запущен`)
});

bot.login("токен")