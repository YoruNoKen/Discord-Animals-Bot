# Animals Bot

A Discord bot written in TypeScript that uses the bun runtime. Returns random images of animals..

You can try the bot yourself [by inviting it to your server](https://discord.com/api/oauth2/authorize?client_id=1158737858660675655&permissions=2048&scope=bot).

<img src="https://cdn.discordapp.com/attachments/1158913333769015427/1158921188828000256/vAIKQNw.png" alt="Cats bury their feces to cover their trails from predators." width="400"/> <img src="https://cdn.discordapp.com/attachments/1158913333769015427/1158922864158838884/AjDgToo.png" alt='Corgi is Welsh for "dwarf dog".' width="400">

## 🚀 Building the bot

1. Clone this repository to your local machine.
2. Run `bun install` to install the necessary dependencies.
3. Create a Discord bot and obtain the necessary token. You can find a guide [here](https://discord.com/build/app-developers).
4. Rename the `.env.local.example` file to `.env.local` and add your API credentials in the following format:

```env
TOKEN=DISCORD_TOKEN_HERE
```

5. Launch the bot by running `bun start`.

## 🖥️ Commands 

```env
/cats - replies with a random media of cat(s).
/dogs - replies with a random media of dog(s).
/foxes - replies with a random media of fox(es).
```

## 🙌 Credits

This project was developed by YoruNoKen under the [MIT](https://choosealicense.com/licenses/mit/) license.
APIs used are as follows:

- [cat facts](https://meowfacts.herokuapp.com/)
- [cat images](https://cataas.com)

- [dog facts](https://dogapi.dog/api/v2/facts)
- [dog images](https://dog.ceo/api/breeds/image/random)

- [fox facts](https://fungenerators.com/random/facts/animal/fox)
- [fox images](https://randomfox.ca/floof/)