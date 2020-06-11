module.exports = {
  name: "news",
  category: "admin",
  description: "Create news",
  run: async (client, message, args) => {
    if (message.member.roles.find((x) => x.name, "botDev")) {
      const userMessage = args.join(" ");

      message.delete().catch((O_o) => {});

      if (!userMessage)
        return message.channel.send("Você precisa informar qual a novidade.");

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
