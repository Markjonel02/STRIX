import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import { Outlet, Link } from "react-router-dom";
import { series } from "../data/Data";
import { Kdramadb } from "../data/Data";
const size = ["w-100 h-50"];

const Series = () => {
  const breakpoints = {
    577: {
      slidesPerView: 1.0,
    },
    877: {
      slidesPerView: 2.75,
      spaceBetween: 20, // corrected typo here
    },
    1024: {
      slidesPerView: 4.75,
      spaceBetween: 20,
    },
  };

  return (
    <>
      <Swiper
        className="Swiper-container d-flex justify-content-center align-items-center mb-4 "
        modules={[Pagination, Navigation]}
        navigation={true}
        breakpoints={breakpoints}
        grabCursor={true}
      >
        {/* get all the images in the directory */}
        {series.map((images, index) => (
          <SwiperSlide
            className="swiper-slides"
            style={{ width: "18rem" }}
            key={index}
          >
            <Link to={`/image/${images.title}/${index + 1}`}>
              <img
                src={images.imageUrl}
                className={`card-img-top img-fluid border-0  rounded ${size}`}
                alt={`${images.title}${index + 1}`}
                loading="lazy"
              />
              <p className="text-center mt-2 text-decoration-none  fw-lighter  text-light ">
                {images.title}
              </p>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      <span className="d-flex fs-5 fw-light text-light mb-2">
        Popular Kdramas
      </span>
      <div className="k-dramas-sec">
        <Swiper
          modules={[Pagination, Navigation]}
          navigation={true}
          breakpoints={breakpoints}
          grabCursor={true}
          className="d-flex justify-content-center align-items-center mb-4 "
        >
          {Kdramadb.map((kd, index) => (
            <SwiperSlide
              className="swiper-slides"
              style={{ width: "18rem" }}
              key={index}
            >
              <Link to={`/image/${kd.title}/${index + 1}`}>
                <img
                  src={kd.imageUrl}
                  className={`card-img-top img-fluid border-0  rounded ${size}`}
                  alt={`${kd.title}${index + 1}`}
                  loading="lazy"
                />
                <p className="text-center mt-2 text-decoration-none  fw-lighter  text-light ">
                  {kd.title}
                </p>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Outlet />
    </>
  );
};
export default Series;
