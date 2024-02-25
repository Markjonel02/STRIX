import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { Link, Outlet } from "react-router-dom";
import { series, Kdramadb } from "../data/Data";

const size = ["w-100 h-50"];

const Series = () => {
  const breakpoints = {
    577: { slidesPerView: 1.0 },
    877: { slidesPerView: 2.75, spaceBetween: 20 },
    1024: { slidesPerView: 4.75, spaceBetween: 20 },
  };

  return (
    <>
      <Swiper
        className="Swiper-container d-flex justify-content-center align-items-center mb-4"
        modules={[Pagination, Navigation]}
        navigation={true}
        breakpoints={breakpoints}
        grabCursor={true}
      >
        {/* Mapping over the series array */}
        {series.map((seriesItem, index) => (
          <SwiperSlide
            className="swiper-slides"
            style={{ width: "18rem" }}
            key={index}
          >
            <Link
              to={`/series/${encodeURIComponent(seriesItem.title)}/${index}`}
            >
              <img
                src={seriesItem.imageUrl}
                className={`card-img-top img-fluid border-0 ${size}`}
                alt={`${seriesItem.title}${index}`}
                loading="lazy"
              />
              <p className="text-center mt-2 text-decoration-none fw-lighter text-light">
                {seriesItem.title.replace(/-/g, " ")}
              </p>
            </Link>
          </SwiperSlide>
        ))}
        <Outlet />
      </Swiper>

      <span className="d-flex fs-5 fw-bold text-light mb-2">
        Popular Kdramas
      </span>
      <div className="k-dramas-sec">
        <Swiper
          modules={[Pagination, Navigation]}
          navigation={true}
          breakpoints={breakpoints}
          grabCursor={true}
          className="d-flex justify-content-center align-items-center mb-4"
        >
          {/* Mapping over the Kdramadb array */}
          {Kdramadb.map((kd, index) => (
            <SwiperSlide
              className="swiper-slides"
              style={{ width: "18rem" }}
              key={index}
            >
              <Link to={`/series/${encodeURIComponent(kd.title)}/${index}`}>
                <img
                  src={kd.imageUrl}
                  className={`card-img-top border-0 ${size}`}
                  alt={`${kd.title}${index}`}
                  loading="lazy"
                />
                <p className="text-center text-decoration-none fw-lighter text-light">
                  {kd.title.replace(/-/g, " ")}
                </p>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Series;
