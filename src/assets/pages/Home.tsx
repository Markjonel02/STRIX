import Avenger from "../img/Moviesimg/avengers-endgame.jpg";
import spiderman from "../img/Moviesimg/hd_spiderman_no_way_home.jpg";
import marvel from "../img/Moviesimg/Marvel.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/effect-fade";

const Home = () => {
  return (
    <>
      <Swiper
        pagination={{ dynamicBullets: true, clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        effect={"fade"}
        loop={true}
        modules={[Autoplay, EffectFade, Pagination]}
      >
        <SwiperSlide>
          <LazyLoadImage
            src={marvel}
            alt="Doctor Strange Multiverse of Madness"
            effect="blur"
            width="100%"
            height="auto"
            loading="lazy"
          />
        </SwiperSlide>
        <SwiperSlide>
          <LazyLoadImage
            src={Avenger}
            alt="Avengers End Game"
            effect="blur"
            width="100%"
            height="auto"
            loading="lazy"
          />
        </SwiperSlide>
        <SwiperSlide>
          <LazyLoadImage
            src={spiderman}
            alt="Spiderman No Way Home"
            effect="blur"
            width="100%"
            height="auto"
            loading="lazy"
          />
        </SwiperSlide>
      </Swiper>

      <Swiper>
        <SwiperSlide>
          <div className="card-wrapper">
            <h2></h2>
            <div className="cards">
              <h5>title</h5>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Home;
