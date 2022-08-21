import { Client } from "discord.js";
import path from "path";
import fs from "fs";

const eventsDir = path.join(__dirname, "..", "events");

const eventFiles = fs
  .readdirSync(eventsDir)
  .filter((file) => file.endsWith(".ts"));

const handleAllEvents = async (client: Client) => {
  for (const eventFile of eventFiles) {
    const eventHandlerObj = require(path.join(eventsDir, eventFile)).default;
    const eventName = eventHandlerObj.event;
    const once = eventHandlerObj?.once ?? false;
    const eventHandler = eventHandlerObj.handler;

    if (once)
      client.once(eventName, (...args) => eventHandler(...args, client));
    else client.on(eventName, (...args) => eventHandler(...args, client));
  }
};

export default handleAllEvents;
