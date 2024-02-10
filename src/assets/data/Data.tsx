import chucky from "../img/seriesimg/chucky-series-wallpapers.jpg";
import echo from "../img/seriesimg/echo-marvel-wallpapers.jpg";
import greys from "../img/seriesimg/greys-anatomy-wallpapers.jpg";
import sweethome from "../img/seriesimg/sweet-home-wallpapers.jpg";
import chosen from "../img/seriesimg/the-chosen-wallpapers.jpg";
import vincenzo from "../img/seriesimg/vincenzo-netflix-wallpapers.jpg";
import young from "../img/seriesimg/young-sheldon-wallpapers.jpg";

/* Kdrama */
import korean from "../img/seriesimg/kdrama/a-korean-odyssey-wallpapers.jpg";
import descendants from "../img/seriesimg/kdrama/descendants-of-the-sun-wallpapers.jpg";
import extraordinary from "../img/seriesimg/kdrama/extraordinary-attorney-woo-wallpapers.jpg";
import gumiho from "../img/seriesimg/kdrama/gumiho-wallpapers.jpg";
import hotel from "../img/seriesimg/kdrama/hotel-del-luna-hd-wallpapers.jpg";
import mydemon from "../img/seriesimg/kdrama/my-demon-kdrama-wallpapers.jpg";
import mylove from "../img/seriesimg/kdrama/my-love-from-the-star-wallpapers.jpg";
import reply from "../img/seriesimg/kdrama/reply-1988-wallpapers.jpg";

// types.ts

export interface ImageData {
  genre: string;
  title: string;
  imageUrl: string;
}

export const Kdramadb: ImageData[] = [
  { title: "A Korean Oddesey", imageUrl: korean, genre: "Drama" },
  { title: "Descendants of the sun", imageUrl: descendants, genre: "Drama" },
  {
    title: "Extraordinary Attorney Woo",
    imageUrl: extraordinary,
    genre: "Drama",
  },
  {
    title: "My Girlfriend is a gumiho",
    imageUrl: gumiho,
    genre: "Fantasy, Romance",
  },
  { title: "Hotel del Luna", imageUrl: hotel, genre: "Fantasy, Romance" },
  { title: "My demon", imageUrl: mydemon, genre: "Fantasy, Romance" },
  {
    title: "My love From The Star",
    imageUrl: mylove,
    genre: "Fantasy, Romance",
  },
  { title: "Reply 1988", imageUrl: reply, genre: "Drama" },
];

export const series: ImageData[] = [
  { title: "Chucky", imageUrl: chucky, genre: "Horror" },
  {
    title: "Vincenzo ",
    imageUrl: vincenzo,
    genre: "Action, Adventure, Comedy",
  },
  { title: "Young-Sheldon", imageUrl: young, genre: "Comedy, Family" },
  { title: "Echo", imageUrl: echo, genre: "Comedy, Family" },
  { title: "Greys Anatomy's", imageUrl: greys, genre: "Drama, Romance" },
  {
    title: "Sweethome",
    imageUrl: sweethome,
    genre: "Horror, Thriller",
  },
  { title: "Chosen", imageUrl: chosen, genre: "Comedy, Family" },
];

const Data = () => {
  return { series };
};

export default Data;
