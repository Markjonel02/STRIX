/* chucky images */
import chucky from "../img/seriesimg/chucky/chucksnew.jpg";
import chucky1 from "../img/seriesimg/chucky/chucky series.jpg";
import chucky2 from "../img/seriesimg/chucky/chucky-series.jpg";
import chucky3 from "../img/seriesimg/chucky/chucky_new.jpg";
import chuckyt from "../img/seriesimg/chucky/chuckyseries.jpg";

export interface Images {
  imgall: string[];
}

export const Chucks: Images[] = [
  { imgall: chucky },
  { imgall: chucky1 },
  { imgall: chucky2 },
  { imgall: chucky3 },
  { imgall: chuckyt },
];

export const Vincenzo: Images[] = [
  { imgall: "https://wallpaperca ve.com/wp/wp8677238.jpg" },
  { imgall: "https://wallpapercave.com/wp/wp8677254.jpg" },
  { imgall: "https://wallpapercave.com/wp/wp8677295.png " },
  { imgall: "https://wallpapercave.com/wp/wp8677307.jpg" },
  { imgall: "https://wallpapercave.com/wp/wp8677237.jpg" },
];

export const Sheldon: Images[] = [
  { imgall: "https://wallpapercave.com/wp/wp4092812.jpg" },
  { imgall: "https://wallpapercave.com/wp/wp4092829.jpg" },
  { imgall: "" },
  { imgall: "" },
  { imgall: "" },
];

const Allimg = () => {
  return (
    <>
      {Chucks}
      {Vincenzo}
      {Sheldon}
    </>
  );
};

export default Allimg;
