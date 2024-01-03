import { Carousel } from "react-bootstrap";
import Avenger from "../img/Moviesimg/avengers-endgame.jpg";
import spiderman from "../img/Moviesimg/hd_spiderman_no_way_home.jpg";
import marvel from "../img/Moviesimg/Marvel.jpg";
import ImagetGrid from "./VideoGrid";

const Home = () => {
  return (
    <>
      <Carousel id="carouselExampleDark" variant="dark">
        <Carousel.Item interval={3000}>
          <img src={marvel} className="d-block w-100" alt="..." />
          <Carousel.Caption>
            <h5 className="text-light fw-medium fs-2">
              Doctor Strange Multiverse of Madness
            </h5>
            <p className="text-light">
              Doctor Strange in the Multiverse of Madness is a 2022 American
              superhero film based on Marvel Comics featuring the character
              Doctor Strange.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img src={Avenger} className="d-block w-100" alt="..." />
          <Carousel.Caption>
            <h5 className="text-light fw-medium fs-2">Avengers End Game</h5>
            <p className="text-light">
              Endgame is a 2019 American superhero film based on the Marvel
              Comics superhero team the Avengers.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img src={spiderman} className="d-block w-100 h-50" alt="..." />
          <Carousel.Caption>
            <h5 className="text-light fw-medium fs-2">Spiderman No Way Home</h5>
            <p className="text-light">
              Some representative placeholder content for the third slide.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="Videogrid overflow-auto border-4 ">
        <ImagetGrid />
      </div>
    </>
  );
};

export default Home;
