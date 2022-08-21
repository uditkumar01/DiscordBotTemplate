import {
  ChatInputCommandInteraction,
  Client,
  SlashCommandBuilder,
} from "discord.js";

const command = new SlashCommandBuilder()
  .setName("testnow")
  .setDescription("Test command")
  .toJSON();

const handler = async (
  interaction: ChatInputCommandInteraction,
  client: Client
) => {
  if (!client?.user) return;
  await interaction.deferReply();
  await interaction.editReply("cha cha");
};

export { command, handler };
