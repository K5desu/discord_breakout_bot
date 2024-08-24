const { Client, GatewayIntentBits } = require("discord.js");
const { token } = require("./config.json");
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.once("ready", async () => {
  console.log(`${client.user.tag}で起動しました！`);
});

client.on("messageCreate", async (message) => {
  if (message.author.bot || message.webhookId) return;
  await message.reply(message.content);
});

client.login(token);
