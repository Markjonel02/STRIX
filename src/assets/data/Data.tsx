/* eslint-disable react-refresh/only-export-components */
// seriesData.ts

import chuckyImage from "../img/seriesimg/chucky-series-wallpapers.jpg";
import echoImage from "../img/seriesimg/echo-marvel-wallpapers.jpg";
import greysImage from "../img/seriesimg/greys-anatomy-wallpapers.jpg";
import sweethomeImage from "../img/seriesimg/sweet-home-wallpapers.jpg";
import chosenImage from "../img/seriesimg/the-chosen-wallpapers.jpg";
import vincenzoImage from "../img/seriesimg/vincenzo-netflix-wallpapers.jpg";
import youngImage from "../img/seriesimg/young-sheldon-wallpapers.jpg";

/* Kdrama */
import koreanImage from "../img/seriesimg/kdrama/a-korean-odyssey-wallpapers.jpg";
import descendantsImage from "../img/seriesimg/kdrama/descendants-of-the-sun-wallpapers.jpg";
import extraordinaryImage from "../img/seriesimg/kdrama/extraordinary-attorney-woo-wallpapers.jpg";
import gumihoImage from "../img/seriesimg/kdrama/gumiho-wallpapers.jpg";
import hotelImage from "../img/seriesimg/kdrama/hotel-del-luna-hd-wallpapers.jpg";
import mydemonImage from "../img/seriesimg/kdrama/my-demon-kdrama-wallpapers.jpg";
import myloveImage from "../img/seriesimg/kdrama/my-love-from-the-star-wallpapers.jpg";
import replyImage from "../img/seriesimg/kdrama/reply-1988-wallpapers.jpg";

export interface ImageData {
  genre: string;
  title: string;
  imageUrl: string;
}

export const Kdramadb: ImageData[] = [
  { title: "Korean-Oddesey", imageUrl: koreanImage, genre: "Drama" },
  {
    title: "Descendants-of-the-sun",
    imageUrl: descendantsImage,
    genre: "Drama",
  },
  {
    title: "Extraordinary-Attorney-Woo",
    imageUrl: extraordinaryImage,
    genre: "Drama",
  },
  {
    title: "My-Girlfriend-is-a-gumiho",
    imageUrl: gumihoImage,
    genre: "Fantasy, Romance",
  },
  { title: "Hotel-del-Luna", imageUrl: hotelImage, genre: "Fantasy, Romance" },
  { title: "My-demon", imageUrl: mydemonImage, genre: "Fantasy, Romance" },
  {
    title: "My-love-From-The-Star",
    imageUrl: myloveImage,
    genre: "Fantasy, Romance",
  },
  { title: "Reply-1988", imageUrl: replyImage, genre: "Drama" },
];

export const series: ImageData[] = [
  { title: "Chucky", imageUrl: chuckyImage, genre: "Horror" },
  {
    title: "Vincenzo",
    imageUrl: vincenzoImage,
    genre: "Action, Adventure, Comedy",
  },
  { title: "Young-Sheldon", imageUrl: youngImage, genre: "Comedy, Family" },
  { title: "Echo", imageUrl: echoImage, genre: "Comedy, Family" },
  { title: "Greys-Anatomys", imageUrl: greysImage, genre: "Drama, Romance" },
  {
    title: "Sweethome",
    imageUrl: sweethomeImage,
    genre: "Horror, Thriller",
  },
  { title: "Chosen", imageUrl: chosenImage, genre: "Comedy, Family" },
];

const Data = () => {
  return { series: series, Kdramadb: Kdramadb };
};

export default Data;
