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
        .setAuthor("Kaposka: News", `${client.user.avatarURL}`)
        .addField("News:", `${change}`)
        .setFooter("Powered by Migtito#0001")
        .setTimestamp();

      client.channels
        .get("720644687769108641")
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
