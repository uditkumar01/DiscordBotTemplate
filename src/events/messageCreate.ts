import { Client, Message } from "discord.js";

const { BOT_ID } = process.env;

const eventData = {
  event: "messageCreate",
  handler: async (msg: Message, client: Client) => {
    console.log(msg.content);
    if (!client?.user) return;
    if (msg.author.id === BOT_ID) return;
    if (msg.content === "ping") msg.reply("pong");
  },
};

export default eventData;
