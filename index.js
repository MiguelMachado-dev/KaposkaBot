const { Client, Collection } = require("discord.js");
const { config } = require("dotenv");

const client = new Client({
  disableEveryone: true, // bot can't use @everyone
});

client.commands = new Collection();
client.aliases = new Collection();

config({
  path: __dirname + "/.env",
});

["command"].forEach((handler) => {
  require(`./handler/${handler}`)(client);
});

client.on("ready", () => {
  client.user.setPresence({
    status: "online",
    game: {
      name: `a galera tomando na jabiraca`,
      type: "WATCHING",
    },
  });
});

client.on("guildMemberAdd", (member) => {
  const role = member.guild.roles.find("name", "Comerciante");
  member.addRole(role);
});

client.on("guildMemberRemove", (member) => {
  member.guild.channels
    .get("440749266915426305")
    .send(
      "**" + member.user.username + "**, só levou bala tensa e deu rage quit!"
    );
});

client.on("message", async (message) => {
  const prefix = "."; // bot prefix

  if (message.author.bot) return;

  if (message.channel.name === "memes") {
    try {
      await message.react("⬆");
      await message.react("⬇");
    } catch (error) {
      console.error("Error");
    }
  }

  if (message.content.toLowerCase().includes("😠")) {
    message.channel.send("😠");
  }

  if (!message.guild) return;
  if (!message.content.startsWith(prefix)) return; // check this line
  if (!message.member)
    message.member = await message.guild.fetchMember(message);

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();

  if (cmd.length === 0) return;

  let command = client.commands.get(cmd);
  if (!command) command = client.commands.get(client.aliases.get(cmd));

  if (command === "say") command.run(client, message, args);

  if (message.channel.name === "terminal") {
    if (command) command.run(client, message, args);
  } else {
    message.channel.send(
      "É necessário estar no chat <#465967255268622337> para que os comandos funcionem."
    );
  }
});

client.login(process.env.token);
