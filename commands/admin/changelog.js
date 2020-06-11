const { RichEmbed } = require("discord.js");
module.exports = {
  name: "changelog",
  category: "admin",
  description: "Create changelog",
  run: async (client, message, args) => {
    if (message.member.roles.find((x) => x.name, "botDev")) {
      const change = args.join(" ");
      message.delete().catch((O_o) => {});
      const changeEmbed = new RichEmbed()
        .setColor("#FFAA44")
        .setAuthor(
          "Kaposka: Changelog and upcoming",
          `${client.user.avatarURL}`
        )
        .addField("Changelog:", `${change}`)
        .setFooter("Powered by Migtito#0001")
        .setTimestamp();

      client.channels
        .get("720455519957024889")
        .send(changeEmbed)
        .then(async (embedMessage) => {
          await embedMessage.react("👍");
          await embedMessage.react("👎");
        });
    } else {
      message.channel.send(
        "Você não tem permissão para utilizar deste comando."
      );
    }
  },
};
