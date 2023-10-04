import { ChatInputCommandInteraction, EmbedBuilder } from "discord.js";
import { get_dogs } from "../utils";

export async function run({ interaction }: { interaction: ChatInputCommandInteraction }) {
  await interaction.deferReply();

  const dogs = await get_dogs();

  const embed = new EmbedBuilder().setDescription(dogs.fact).setTitle("DID YOU KNOW?").setImage(dogs.image).setColor("DarkVividPink");

  await interaction.editReply({ embeds: [embed] });
}
export { data } from "../data/dogs_data";
