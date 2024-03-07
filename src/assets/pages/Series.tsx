import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { Link, Outlet } from "react-router-dom";
import { series, Kdramadb } from "../data/Data";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useState, useEffect } from "react";

const size = ["w-100"];

const Series = () => {
  const [isBlur, setisBlur] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setisBlur(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

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
        data-aos="fade-left"
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
              <LazyLoadImage
                alt={`${seriesItem.title}${index}`}
                height="100%"
                src={seriesItem.imageUrl}
                width="100%"
                effect="blur"
                className={`card-img-top img-fluid border-0 ${size}`}
                style={{
                  filter: isBlur ? "blur(20px)" : "none",
                  transition: "filter 2s ease",
                }}
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
      <div className="k-dramas-sec" data-aos="fade-right">
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
                <LazyLoadImage
                  alt={`${kd.title}${index}`}
                  height="100%"
                  src={kd.imageUrl}
                  width="100%"
                  effect="blur"
                  className={`card-img-top border-0 ${size}`}
                  style={{
                    filter: isBlur ? "blur(20px)" : "none",
                    transition: "filter 2s ease",
                  }}
                />

                <p className="text-center mt-2 text-decoration-none fw-lighter text-light">
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
