 const Discord = require("discord.js");//npm i discord.js
 const fs = require("fs");//npm i fs
 const bot = new discord.Client();//создаём бота
 const { Client } = require('pg');//npm i pg
 const { prefix, token } = require("./botconfig.json");//конфиги бота
 const moment = require("moment");//npm i moment
 const ms = require("ms");//npm i ms

 bot.commands = new Discord.Collection();
 bot.aliases = new Discord.Collection();
 cooldowns = new Discord.Collection();

 const commandFiles = fs.readdirSync('./cmd').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./cmd/${file}`);
  bot.commands.set(command.name, command);
}

bot.on("ready", async => {
 console.log(`Бот под именем ${bot.user.tag} запущен`)
});

bot.on('message', async message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
  
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
  
      if (!bot.commands.has(command)) return;
    
  
      try {
          bot.commands.get(command).execute(message, args);
        } catch (error) {
          console.log(`.`)
        }
  });
  bot.on("message", async (message) => {
    let prefix = `префикс бота`;
    if (!message.content.startsWith(prefix)) return;
    if (!message.member) message.member = await message.guild.fetchMember(message);
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    if (cmd.length === 0) return;
    let command = bot.commands.get(cmd);
    if (!command) command = bot.commands.get(bot.aliases.get(cmd));
    if (command) {
      command.run(bot, message, args);
    }
  });

bot.login(token)