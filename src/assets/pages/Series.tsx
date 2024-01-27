import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
const Series = () => {
  const breakpoints = {
    577: {
      slidesPerView: 1.75,
    },
    877: {
      slidesPerView: 2.75,
      spaceBetwnn: 20,
    },
    1024: {
      slidesPerView: 4.75,
      spaceBetween: 30,
    },
  };
  return (
    <>
      <Swiper
        className="Swiper-container d-flex justify-content-center align-items-center"
        modules={[Pagination, Navigation]}
        navigation={true}
        breakpoints={breakpoints}
      >
        <SwiperSlide className="swiper-slides">
          <div className="card" style={{ width: "18rem" }}>
            <img src="..." className="card-img-top img-fluid " alt="..." />
            <div className="card-body"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slides">
          <div className="card" style={{ width: "18rem" }}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slides">
          <div className="card" style={{ width: "18rem" }}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slides">
          <div className="card" style={{ width: "18rem" }}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slides">
          <div className="card" style={{ width: "18rem" }}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slides">
          <div className="card" style={{ width: "18rem" }}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slides">
          <div className="card" style={{ width: "18rem" }}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slides">
          <div className="card" style={{ width: "18rem" }}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body"></div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
export default Series;
