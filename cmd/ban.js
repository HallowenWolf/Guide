const Discord = require("discord.js");
const moment = require("moment");

module.exports = {
  name: "ban",
  aliases: ["ban"],
  category: "Bot",
  description: "ban",
  usage: "ban",
  cooldown: 7,
  run: async (bot, message, args, con) => {
    if(!message.member.hasPermission(`BAN_MEMBERS`)) return message.reply(`У вас недостаточно прав\nпопросите выдать вам право Банить участников`);
    if(!message.member.hasPermission(`BAN_MEMBERS`)) return message.reply(`У вас недостаточно прав\nпопросите выдать вам право Банить участников`);
   let banUser = message.mentions.members.first();
           if(!banUser) return  message.reply(`Вы не указали пользователя!`);
           let reason = args.slice(1).join(" ");
           if(!reason) reason = 'Не указана';
           await message.react("✔️")
           await message.guild.members.ban(banUser, {reason: `${reason}`})
  }
}