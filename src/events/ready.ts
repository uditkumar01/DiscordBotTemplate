import { Client } from "discord.js";

const eventData = {
  event: "ready",
  handler: async (client: Client) => {
    if (!client?.user) return;
    console.log(`Logged in as ${client.user.tag}!`);
  },
};

export default eventData;
