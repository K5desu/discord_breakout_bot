require("dotenv").config();
const { Client, GatewayIntentBits } = require("discord.js");
const token = process.env.DISCORD_BOT_TOKEN;
const VC_amount = 2;
const NowVc = process.env.VC1;
let loop_count = 0;
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});
client.once("ready", async () => {
  const guild = client.guilds.cache.get(process.env.GUILD_ID);
  if (!guild) return;
  const VC = await guild.channels.fetch(NowVc);
  const membersArray = Array.from(VC.members.values());
  for (let i = membersArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [membersArray[i], membersArray[j]] = [membersArray[j], membersArray[i]];
  }
  membersArray.forEach((member) => {

   console.log(member.nickname);

    if (loop_count % VC_amount == 0) {
      member.voice.setChannel(process.env.VC1);
    } else if (loop_count % VC_amount == 1) {
      member.voice.setChannel(process.env.VC2); //memberのオブジェクトに
    } else if (loop_count % VC_amount == 2) {
      member.voice.setChannel(process.env.VC3); //memberのオブジェクトに
    } else if (loop_count % VC_amount == 3) {
      member.voice.setChannel(process.env.VC4); //memberのオブジェクトに
    } else if (loop_count % VC_amount == 4) {
      member.voice.setChannel(process.env.VC5); //memberのオブジェクトに
    } else if (loop_count % VC_amount == 5) {
      member.voice.setChannel(process.env.VC6); //memberのオブジェクトに
    } else if (loop_count % VC_amount == 6) {
      member.voice.setChannel(process.env.VC7); //memberのオブジェクトに
    } else if (loop_count % VC_amount == 7) {
      member.voice.setChannel(process.env.VC8); //memberのオブジェクトに
    } else if (loop_count % VC_amount == 8) {
      member.voice.setChannel(process.env.VC9); //memberのオブジェクトに
    } else if (loop_count % VC_amount == 9) {
      member.voice.setChannel(process.env.VC10); //member
    }
    loop_count++;
    console.log(loop_count);
  });
});

client.login(token);
