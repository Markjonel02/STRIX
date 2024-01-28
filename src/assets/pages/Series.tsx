import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
/* images */
import chucky from "../img/seriesimg/chucky-series-wallpapers.jpg";
import echo from "../img/seriesimg/echo-marvel-wallpapers.jpg";
import greys from "../img/seriesimg/greys-anatomy-wallpapers.jpg";
import sweethome from "../img/seriesimg/sweet-home-wallpapers.jpg";
import chosen from "../img/seriesimg/the-chosen-wallpapers.jpg";
import vincenzo from "../img/seriesimg/vincenzo-netflix-wallpapers.jpg";
import young from "../img/seriesimg/young-sheldon-wallpapers.jpg";

import { Outlet, Link } from "react-router-dom";

export interface SeriesProps {
  title: string;
  imageUrl: string;
  genre: string;
}

const size = ["w-100 h-50"];

const Series = () => {
  const series: SeriesProps[] = [
    { title: "Chucky", imageUrl: chucky, genre: "Horror" },
    { title: "Vincnzo ", imageUrl: vincenzo, genre: "Action, Adventure" },
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

  const breakpoints = {
    577: {
      slidesPerView: 1.0,
    },
    877: {
      slidesPerView: 2.75,
      spaceBetwnn: 20,
    },
    1024: {
      slidesPerView: 4.75,
      spaceBetween: 20,
    },
  };
  return (
    <>
      <Swiper
        className="Swiper-container d-flex justify-content-center align-items-center"
        modules={[Pagination, Navigation]}
        navigation={true}
        breakpoints={breakpoints}
        grabCursor={true}
      >
        {series.map((images, index) => (
          <SwiperSlide className="swiper-slides" style={{ width: "18rem" }}>
            <Link to={`/images${index + 1}`}>
              <img
                src={images.imageUrl}
                className={`card-img-top img-fluid border-0  rounded ${size}`}
                alt={`${images}${index + 1}`}
              />
              <p className="text-center mt-2 text-decoration-none  fw-lighter  text-light  ">
                {images.title}
              </p>
            </Link>
          </SwiperSlide>
        ))}
        <Outlet />
      </Swiper>
    </>
  );
};
export default Series;
