import { Carousel } from "react-bootstrap";
import Avenger from "../img/Moviesimg/avengers-endgame.jpg";
import spiderman from "../img/Moviesimg/hd_spiderman_no_way_home.jpg";
import marvel from "../img/Moviesimg/Marvel.jpg";
import { Swiper } from "swiper/react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "swiper/swiper-bundle.css";

const Home = () => {
  return (
    <>
      <Swiper>
        <Carousel id="carouselExampleDark" variant="dark">
          <Carousel.Item interval={3000}>
            <LazyLoadImage
              src={marvel}
              alt="Doctor Strange Multiverse of Madness"
              effect="blur"
              width="100%"
              height="auto"
              loading="lazy"
            />

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
            <LazyLoadImage
              src={Avenger}
              alt="Avengers End Game"
              effect="blur"
              width="100%"
              height="auto"
              loading="lazy"
            />

            <Carousel.Caption>
              <h5 className="text-light fw-medium fs-2">Avengers End Game</h5>
              <p className="text-light">
                Endgame is a 2019 American superhero film based on the Marvel
                Comics superhero team the Avengers.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <LazyLoadImage
              src={spiderman}
              alt="Spiderman No Way Home"
              effect="blur"
              width="100%"
              height="auto"
              loading="lazy"
            />

            <Carousel.Caption>
              <h5 className="text-light fw-medium fs-2">
                Spiderman No Way Home
              </h5>
              <p className="text-light">
                Some representative placeholder content for the third slide.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <div className="home overflow-auto border-4 "></div>
      </Swiper>
    </>
  );
};

export default Home;
