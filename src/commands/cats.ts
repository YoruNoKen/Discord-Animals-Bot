import { ChatInputCommandInteraction, EmbedBuilder } from "discord.js";
import { getCats } from "../utils";

export async function run({ interaction }: { interaction: ChatInputCommandInteraction }) {
  await interaction.deferReply();

  const cats = await getCats();

  const embed = new EmbedBuilder().setDescription(cats.fact).setTitle("DID YOU KNOW?").setImage(cats.image).setColor("DarkVividPink");

  await interaction.editReply({ embeds: [embed] });
}
export { data } from "../data/catsData";
