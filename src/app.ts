import dotenv from "dotenv";
import { Client, GatewayIntentBits } from "discord.js";
import handleAllEvents from "./functions/handleAllEvents";

dotenv.config();

const { BOT_TOKEN } = process.env;

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

// to handle all events
handleAllEvents(client);

client.login(BOT_TOKEN);
