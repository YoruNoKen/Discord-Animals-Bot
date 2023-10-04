const get_random_number = (x: number) => Math.floor(Math.random() * x);
import { cat_fact_url, cat_image_url, dog_fact_url, dog_image_url } from "./constants";

export async function get_cats() {
  const fact = await fetch(cat_fact_url)
    .then((res) => res.json())
    .then((res) => res.data[0]);

  const imageRandom = await fetch(cat_image_url + "/cat" + "?json=true").then((res) => res.json());
  const image = cat_image_url + imageRandom.url;

  return { fact, image };
}

export async function get_dogs() {
  const fact = await fetch(dog_fact_url)
    .then((res) => res.json())
    .then((res) => res.data[0].attributes.body);

  const image = await fetch(dog_image_url)
    .then((res) => res.json())
    .then((res) => res.message);

  return { fact, image };
}
