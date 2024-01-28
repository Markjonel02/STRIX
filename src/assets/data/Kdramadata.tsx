import korean from "../img/seriesimg/kdrama/a-korean-odyssey-wallpapers.jpg";
import descendants from "../img/seriesimg/kdrama/descendants-of-the-sun-wallpapers.jpg";
import extraordinary from "../img/seriesimg/kdrama/extraordinary-attorney-woo-wallpapers.jpg";
import gumiho from "../img/seriesimg/kdrama/gumiho-wallpapers.jpg";
import hotel from "../img/seriesimg/kdrama/hotel-del-luna-hd-wallpapers.jpg";
import mydemon from "../img/seriesimg/kdrama/my-demon-kdrama-wallpapers.jpg";
import mylove from "../img/seriesimg/kdrama/my-love-from-the-star-wallpapers.jpg";
import reply from "../img/seriesimg/kdrama/reply-1988-wallpapers.jpg";

export interface KdramaProps {
  title: string;
  imgSrc: string;
  /*   genre: string; */
}
export const Kdramadb: KdramaProps[] = [
  { title: "A Korean Oddesey", imgSrc: korean },
  { title: "Descendants of the sun", imgSrc: descendants },
  { title: "Extraordinary Attorney Woo", imgSrc: extraordinary },
  { title: "My Girlfriend is a gumiho", imgSrc: gumiho },
  { title: "Hotel del Luna", imgSrc: hotel },
  { title: "My demon", imgSrc: mydemon },
  { title: "My love From The Star", imgSrc: mylove },
  { title: "Reply 1988", imgSrc: reply },
];

const Kdrama = () => {
  return <>{Kdramadb}</>;
};

export default Kdrama;
