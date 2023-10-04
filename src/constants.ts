import { MyClient } from ".";

export const server_join_message = (client: MyClient) =>
  `Hello, I'm ${client.user?.username}! I'm a Discord bot developed by @yorunoken that sends random cute media and facts of animals.\nHere are my commands:\n\`\`\`/cats\n/dogs\`\`\`\n If you come across any issues or bugs, contact my owner at @yorunoken on Discord or @ken_yoru on Twiter.`;

export const cat_fact_url = "https://meowfacts.herokuapp.com";
export const cat_image_url = "https://cataas.com";

export const dog_fact_url = "https://dogapi.dog/api/v2/facts";
export const dog_image_url = "https://dog.ceo/api/breeds/image/random";
