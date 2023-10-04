import { ChatInputCommandInteraction, EmbedBuilder } from "discord.js";
import { getFoxes } from "../utils";

export async function run({ interaction }: { interaction: ChatInputCommandInteraction }) {
  await interaction.deferReply();

  const foxes = await getFoxes();

  const embed = new EmbedBuilder().setDescription(foxes.fact).setTitle("DID YOU KNOW?").setImage(foxes.image).setColor("DarkVividPink");

  await interaction.editReply({ embeds: [embed] });
}
export { data } from "../data/foxesData";
