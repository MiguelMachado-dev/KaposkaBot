module.exports = {
  name: "news",
  category: "admin",
  description: "Create news",
  run: async (client, message, args) => {
    if (message.member.roles.find((x) => x.name, "botDev")) {
      const change = args.join(" ");

      message.delete().catch((O_o) => {});

      const userMessage = change;

      client.channels
        .get("720644687769108641")
        .send(userMessage)
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
