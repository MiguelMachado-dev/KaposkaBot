const snek = require("snekfetch");
const APIcat = "https://api.thecatapi.com/v1/images/search?size=full";

module.exports = {
  name: "meow",
  category: "funny",
  description: "Send a random cat media.",
  run: async (client, message, args) => {
    const msg = await message.channel.send("> Indo pegar a câmera...");

    const response = (await snek.get(APIcat)).text; // Getting response
    const responseJSON = JSON.parse(response); // Parsing into JSON
    const url = responseJSON[0].url; // Getting url

    if (!response)
      return message.channel.send(
        "É, não deu... Foi rápido de mais! Tente de novo ;("
      );

    await message.channel.send({
      files: [url],
    });

    msg.delete();
  },
};
