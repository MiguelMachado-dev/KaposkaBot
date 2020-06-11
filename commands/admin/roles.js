const { RichEmbed } = require("discord.js");
module.exports = {
  name: "roles",
  category: "admin",
  description: "Create reaction roles",
  run: async (client, message, args) => {
    if (message.member.roles.find((x) => x.name, "botDev")) {
      message.delete().catch((O_o) => {});

      const changeEmbed = new RichEmbed()
        .setColor("#FFAA44")
        .setTitle("Server Roles")
        .setDescription(
          "<:news:720666971267399695> - News, receba notificação sobre notícias e novidades"
        )
        .setFooter("Powered by Migtito#0001")
        .setTimestamp();

      client.channels
        .get("452563614734221314")
        .send(changeEmbed)
        .then(async (embedMessage) => {
          await embedMessage.react("720666971267399695");
        });

      client.on("messageReactionAdd", (reaction, user) => {
        if (user.bot) return;

        const roleName = reaction.emoji.name;
        const role = reaction.message.guild.roles.find(
          (role) => role.name.toLowerCase() === roleName.toLowerCase()
        );
        const member = reaction.message.guild.members.find(
          (member) => member.id === user.id
        );

        if (member.roles.has(role.id)) {
          member
            .removeRole(role.id)
            .then((member) => {
              console.log(
                "Removed " +
                  member.user.username +
                  " from the " +
                  role.name +
                  " role."
              );
            })
            .catch((err) => console.error);
        } else {
          member
            .addRole(role.id)
            .then((member) => {
              console.log("added");
            })
            .catch((err) => console.error);
        }
      });
    } else {
      message.channel.send(
        "Você não tem permissão para utilizar deste comando."
      );
    }
  },
};
