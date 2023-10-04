import * as websites from "./constants";
import cheerio from "cheerio";

const getRandomNumber = (x: number) => Math.floor(Math.random() * x);

export async function getCats() {
  const fact = await fetch(websites.catFactUrl)
    .then((res) => res.json())
    .then((res) => res.data[0]);

  const imageRandom = await fetch(websites.catImageUrl + "/cat" + "?json=true").then((res) => res.json());
  const image = websites.catImageUrl + imageRandom.url;

  return { fact, image };
}

export async function getDogs() {
  const fact = await fetch(websites.dogFactUrl)
    .then((res) => res.json())
    .then((res) => res.data[0].attributes.body);

  const image = await fetch(websites.dogImageUrl)
    .then((res) => res.json())
    .then((res) => res.message);

  return { fact, image };
}

export async function getFoxes() {
  const factHtml = await fetch(websites.foxFactUrl).then((res) => res.text());
  const $ = cheerio.load(factHtml);
  const fact = $("h2.wow.fadeInUp.animated.animated").text().replace(" (Animal > Fox )", "");

  const image = await fetch(websites.foxImageUrl)
    .then((res) => res.json())
    .then((res) => res.image);

  return { fact, image };
}
