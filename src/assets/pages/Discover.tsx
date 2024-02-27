import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


import { Pagination, EffectCoverflow } from "swiper/modules";
export const Discover = () => {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        pagination={true}
        modules={[Pagination, EffectCoverflow]}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        className="Swiper-disc"
      >
        <SwiperSlide className="Swiper-slide">
          <div className="card" style={{ width: "18rem" }}>
            <img className="card-img-top" src="..." alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="Swiper-slide">
          <div className="card" style={{ width: "18rem" }}>
            <img className="card-img-top" src="..." alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
