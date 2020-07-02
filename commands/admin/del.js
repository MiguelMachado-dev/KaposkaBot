module.exports = {
  name: "del",
  category: "admin",
  description: "Delete message",
  run: async (client, message, args) => {
    if (message.member.roles.find((x) => x.name, "botDev")) {
      const amount = parseInt(args[0]) + 1;

      if (isNaN(amount)) {
        return message.reply("that doesn't seem to be a valid number.");
      } else if (amount <= 1 || amount > 100) {
        return message.reply("you need to input a number between 1 and 99.");
      }

      message.channel.bulkDelete(amount, true).catch((err) => {
        console.error(err);
        message.channel.send(
          "there was an error trying to prune messages in this channel!"
        );
      });
    } else {
      message.channel.send(
        "Você não tem permissão para utilizar deste comando."
      );
    }
  },
};
