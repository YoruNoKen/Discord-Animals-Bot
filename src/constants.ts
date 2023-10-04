import { MyClient } from ".";

export const serverJoinMessage = (client: MyClient) =>
  `Hello, I'm ${client.user?.username}! I'm a Discord bot developed by @yorunoken that sends random cute media and facts of animals.\nHere are my commands:\n\`\`\`/cats\n/dogs\`\`\`\n If you come across any issues or bugs, contact my owner at @yorunoken on Discord or @ken_yoru on Twiter.`;

export const catFactUrl = "https://meowfacts.herokuapp.com";
export const catImageUrl = "https://cataas.com";

export const dogFactUrl = "https://dogapi.dog/api/v2/facts";
export const dogImageUrl = "https://dog.ceo/api/breeds/image/random";

export const foxFactUrl = "https://fungenerators.com/random/facts/animal/fox";
export const foxImageUrl = "https://randomfox.ca/floof/";
