require("dotenv").config();

const PREFIX = "*";
const { Client } = require("discord.js");
const client = new Client();
client.on("ready", () => {
  console.log(`${client.user.username} is Ready to Go!!!`);
});

client.on("message", (message) => {
  if (message.author.bot) return;
  console.log(message.content);
  if (message.content === "hi bot" || message.content === "hello bot") {
    message.channel.send(`Hi ${message.author.toString()}! ^^`);
  } else if (message.content.startsWith("sa bot") || message.content.startsWith("selamın aleykum bot")) {
    message.channel.send(`As ${message.author.toString()} :wave:`);
  }
  else if(message.content.startsWith(PREFIX)){
      const [CMD_NAME, ...args] = message.content
      .trim()
      .substring(PREFIX.length)
      .split(/\s+/); //space regex to collect all spaces instead of one 
      //(later ends up with multiple space elements in the args array)

      console.log(args);
      message.channel.send(`${CMD_NAME} command has no function yet :(`);
  }
});

client.login(process.env.MORZAT_BOT_TOKEN);
