const { RichEmbed } = require("discord.js");
module.exports = {
  name: "comandos",
  category: "admin",
  description: "Shows every bot commands",
  run: async (client, message, args) => {
    const embed = new RichEmbed()
      .setColor(0xcc0000)
      .setAuthor("Kaposka: Command List", `${client.user.avatarURL}`)
      .addField(".userinfo", "Mostra algumas infos sua.")
      .addBlankField()
      .addField(".8ball", "Pergunte algo para a 8ball!")
      .addField(".birb", "Gera um meme aleatório de pássaros.")
      .addField(".meow", "Gera uma foto aleatória de gatinho.")
      .addField(".woof", "Gera uma foto aleatória de cachorrinho.")
      .addField(".shiba", "Gera uma foto aleatória de shiba.")
      .addField(".random", "Gera um meme aleatório do reddit.")
      .addField(".rate", "Solicita ao bot uma nota para algo.")
      .addField(".chuck", "Gera uma piada aleatória do Chuck Norris. [EN]")
      .addBlankField()
      .addField(".covid <país>", "Mostra informações gerais sobre o Covid-19.")
      .addField(".regras <país>", "Mostra as regras do servidor.")
      .setFooter("Powered by Migtito#0001")
      .setTimestamp();
    message.channel.send({ embed });
  },
};
