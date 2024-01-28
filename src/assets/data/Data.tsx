import chucky from "../img/seriesimg/chucky-series-wallpapers.jpg";
import echo from "../img/seriesimg/echo-marvel-wallpapers.jpg";
import greys from "../img/seriesimg/greys-anatomy-wallpapers.jpg";
import sweethome from "../img/seriesimg/sweet-home-wallpapers.jpg";
import chosen from "../img/seriesimg/the-chosen-wallpapers.jpg";
import vincenzo from "../img/seriesimg/vincenzo-netflix-wallpapers.jpg";
import young from "../img/seriesimg/young-sheldon-wallpapers.jpg";

export interface SeriesProps {
  title: string;
  imageUrl: string;
  genre: string;
}
// eslint-disable-next-line react-refresh/only-export-components
export const series: SeriesProps[] = [
  { title: "Chucky", imageUrl: chucky, genre: "Horror" },
  { title: "Vincenzo ", imageUrl: vincenzo, genre: "Action, Adventure" },
  { title: "Young-Sheldon", imageUrl: young, genre: "Comdey, Family" },
  { title: "Echo", imageUrl: echo, genre: "Comdey, Family" },
  { title: "Greys", imageUrl: greys, genre: "Comdey, Romance" },
  {
    title: "Sweethome",
    imageUrl: sweethome,
    genre: "Horror, Monster, thriller,action",
  },
  { title: "Chosen", imageUrl: chosen, genre: "Comdey, Family" },
];
const Data = () => {
  return { series };
};

export default Data;
