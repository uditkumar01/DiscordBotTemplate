import { Client, Interaction } from "discord.js";

const eventData = {
  event: "interactionCreate",
  handler: async (interaction: Interaction, client: Client) => {
    console.log(interaction.type);
  },
};

export default eventData;
