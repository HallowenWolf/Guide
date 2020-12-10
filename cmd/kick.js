const Discord = require("discord.js");
const moment = require("moment");

module.exports = {
  name: "kick",
  aliases: ["kick"],
  category: "Bot",
  description: "kick",
  usage: "kick",
  cooldown: 7,
  run: async (bot, message, args, con) => {
    if(!message.member.hasPermission(`KICK_MEMBERS`)) return message.reply(`У вас недостаточно прав\nпопросите выдать вам право Кикать участников`);
    if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.reply(`У меня недостаточно прав!\nПопросите выдать мне право Кикать Участников`)
    let kickUser = message.mentions.members.first();
        if(!kickUser) return  message.reply(`Вы не указали пользователя!`);
        let reason = args.slice(1).join(" ");
        if(!reason) reason = 'Не указана';
        await message.react("✔️")
        await message.guild.member(kickMember).kick(reason);
  }
}