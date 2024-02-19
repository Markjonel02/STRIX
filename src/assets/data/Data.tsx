/* eslint-disable react-refresh/only-export-components */
// seriesData.ts

import chuckyImage from "../img/seriesimg/chucky-series.jpg";
import echoImage from "../img/seriesimg/echo-marvel-wallpapers.jpg";
import greysImage from "../img/seriesimg/greys-anatomy-wallpapers.jpg";
import sweethomeImage from "../img/seriesimg/sweet-home-wallpapers.jpg";
import chosenImage from "../img/seriesimg/the-chosen-wallpapers.jpg";
import vincenzoImage from "../img/seriesimg/vincenzo-netflix-wallpapers.jpg";
import youngImage from "../img/seriesimg/young-sheldon.jpg";

/* Kdrama */
import koreanImage from "../img/seriesimg/kdrama/a-korean-odyssey-wallpapers.jpg";
import descendantsImage from "../img/seriesimg/kdrama/descendants-of-the-sun-wallpapers.jpg";
import extraordinaryImage from "../img/seriesimg/kdrama/extraordinary-attorney-woo-wallpapers.jpg";
import gumihoImage from "../img/seriesimg/kdrama/gumiho-wallpapers.jpg";
import hotelImage from "../img/seriesimg/kdrama/hotel.jpg";
import mydemonImage from "../img/seriesimg/kdrama/my-demon-kdrama-wallpapers.jpg";
import myloveImage from "../img/seriesimg/kdrama/my-love-from-the-star-wallpapers.jpg";
import replyImage from "../img/seriesimg/kdrama/reply-1988-wallpapers.jpg";

export interface ImageData {
  genre: string;
  title: string;
  desc: string;
  imageUrl: string;
  date: string;
  age: string;
  staring: string;
  creator: string;
}

export const Kdramadb: ImageData[] = [
  {
    title: "A-Korean-Oddesey",
    imageUrl: koreanImage,
    genre: "Drama",
    date: "2022",
    age: "14+",
    desc: "In 2017, Son Oh Gong and Ma Wang are in conflict with each other and they look for a true light in a dark world where evils exists everywhere.",
    staring: "Lee Seung-gi, Cha, Seung-wonOh, Yeon-Seo",
    creator: "",
  },
  {
    title: "Descendants-of-the-sun",
    imageUrl: descendantsImage,
    genre: "Drama",
    date: "2022",
    age: "14+",
    desc: "This drama tells of the love story that develops between a surgeon and a special forces officer.",
    staring: "Song Joong-ki, Song Hye-kyo, Jin Goo",
    creator: "",
  },
  {
    title: "Extraordinary-Attorney-Woo",
    imageUrl: extraordinaryImage,
    genre: "Drama",
    date: "2022",
    age: "14+",
    desc: "Due to her 164 I.Q., impressive memory and creative thought process, autistic 27-year-old lawyer Woo Young Woo graduated at the top of her class from a prestigious law school.",
    staring: " Park Eun-binKang, Tae-ohKang, Ki-young",
    creator: "",
  },
  {
    title: "My-Girlfriend-is-a-gumiho",
    imageUrl: gumihoImage,
    genre: "Fantasy, Romance",
    date: "2022",
    age: "14+",
    desc: "Chae Dae Wong, an aspiring actor, unwillingly releases a Gumiho, a legendary nine-tailed fox, from her centuries-old prison. He runs away terrified and ends up injuring himself badly, but she saves his life and asks to stay by his side.",
    staring: "Shin Min-aLee, Seung-giNo, Min-woo",
    creator: "",
  },
  {
    title: "Hotel-del-Luna",
    imageUrl: hotelImage,
    genre: "Fantasy, Romance",
    date: "2022",
    age: "14+",
    desc: "When he's invited to manage a hotel for dead souls, an elite hotelier gets to know the establishment's ancient owner and her strange world.",
    staring: "IU, Yeo Jin-gooShin, Jeong-geun",
    creator: "",
  },
  {
    title: "My-demon",
    imageUrl: mydemonImage,
    genre: "Fantasy, Romance",
    date: "2022",
    age: "14+",
    desc: "A pitiless demon becomes powerless after getting entangled with an icy heiress, who may hold the key to his lost abilities -- and his heart.",
    staring: "Kim Yoo jung,  Song Kang, Lee Sang-yi",
    creator: "",
  },
  {
    title: "My-love-From-The-Star",
    imageUrl: myloveImage,
    genre: "Fantasy, Romance",
    date: "2022",
    age: "14+",
    desc: "o Min-Joon, an alien that came to our planet 400 years ago, will be able to return to his planet in 3 months, but when he meets famous actress Chun Song-Yi, all the centuries he spent distancing himself from humans come to an end.",
    staring: "Jun Ji-hyun, Kim Soo-hyun, Park Hae-Jin",
    creator: "",
  },
  {
    title: "Reply-1988",
    imageUrl: replyImage,
    genre: "Drama",
    date: "2022",
    age: "14+",
    desc: "Five childhood friends, who all live in the same Ssangmundong neighborhood of Seoul in 1988, lean on each other to survive their challenging teen years and set a path for their futures.",
    staring: "Lee Hyeri, Go Kyung-pyo, Ryu Jun-Yeol",
    creator: "",
  },
];

export const series: ImageData[] = [
  {
    title: "Chucky-Series",
    imageUrl: chuckyImage,
    genre: "Horror",
    date: "2022",
    age: "14+",
    staring: "Zackary Arthur, Bjorgvin Arnarson, Alyvia Alyn Lind",
    creator: "Don Mancini, Kim Merced Garland, Amanda Row",
    desc: "After a vintage Chucky doll turns up at a suburban yard sale, an idyllic American town is thrown into chaos as a series of horrifying murders begin to expose the town's hypocrisies and secrets.",
  },
  {
    title: "Vincenzo",
    imageUrl: vincenzoImage,
    genre: "Action, Adventure, Comedy",
    date: "2022",
    age: "14+",
    staring: "Hong Cha Young, Song Joong Ki, Ok Taec Yeon",
    creator: "Su Young Jo · Ham Seung-hoon · Ute Leonhardt",
    desc: "At the age of eight, Park Joo Hyeong left for Italy after being adopted. Now an adult, he is known as Vincenzo Cassano and employed by a Mafia family as a consigliere. Due to warring Mafia factions, he flies to South Korea where he gets involved with lawyer Hong Cha Young. She is the type of attorney who will do anything to win a case.",
  },
  {
    title: "Young-Sheldon",
    imageUrl: youngImage,
    genre: "Comedy, Family",
    date: "2022",
    age: "14+",
    desc: "Meet a child genius named Sheldon Cooper (already seen as an adult in The Big Bang Theory (2007)) and his family. Some unique challenges face Sheldon, who is socially impaired.",
    staring: "Iain Armitage, Zoe Perry ,Lance Barber",
    creator: "",
  },
  {
    title: "Echo",
    imageUrl: echoImage,
    genre: "Comedy, Family, Crime,",
    date: "2022",
    age: "14+",
    desc: "Maya Lopez must face her past, reconnect with her Native American roots, and embrace the meaning of family and community if she ever hopes to move forward.",
    staring: "Alaqua Cox, Chaske Spencer, Graham Greene ,Chaske Spencer",
    creator: "",
  },
  {
    title: "Grey's-Anatomy",
    imageUrl: greysImage,
    genre: "Drama, Romance",
    date: "2022",
    age: "14+",
    desc: "A drama centered on the personal and professional lives of five surgical interns and their supervisors.",
    staring: "Chandra ,WilsonJames Pickens, Jr.Ellen Pompeo",
    creator: "",
  },
  {
    title: "Sweet-Home",
    imageUrl: sweethomeImage,
    genre: "Horror, Thriller",
    date: "2022",
    age: "14+",
    desc: "Hyun, a loner high school student who lost his entire family in a terrible accident, is forced to leave his home and has to face a new reality where monsters are trying to wipe out all of humanity. Now he must fight against all odds to try and race against the clock to save what is left of the human race before it's too late.",
    staring: "Go Min-siLee, Si-youngKim, Hee-Jung",
    creator: "",
  },
  {
    title: "The-Chosen",
    imageUrl: chosenImage,
    genre: "Historical, Family, Drama",
    date: "2022",
    age: "14+",
    desc: "The Chosen is a historical drama based on the life of Jesus and those who knew him. Set against the backdrop of Roman oppression in first-century Palestine, the series shares an authentic look at Jesus' revolutionary life and teachings.",
    staring: "Jordan Walker, Ross Elizabeth, TabishShahar Isaac",
    creator: "",
  },
];

const Data = () => {
  return { series: series, Kdramadb: Kdramadb };
};

export default Data;
