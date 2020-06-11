const { RichEmbed } = require("discord.js");
module.exports = {
  name: "userinfo",
  category: "admin",
  description: "Shows user account info",
  run: async (client, message, args) => {
    const embed = new RichEmbed()
      .setColor(0x9370db)
      .setAuthor("Trench: User Info", `${client.user.avatarURL}`)
      .addField("Your username", `${message.author.username}`)
      .addField("Your ID", `${message.author.id}`)
      .addField("Created at", `${message.author.createdAt}`)
      .addField("You Joined", message.member.joinedAt)
      .addField("Total Members on server", message.guild.memberCount)
      .setFooter("Powered by Migtito#0001")
      .setTimestamp();
    message.channel.send({ embed });
  },
};
