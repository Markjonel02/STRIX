import { Swiper, SwiperSlide } from "swiper/react";
export const Latest = () => {
  return (
    <>
      <Swiper>
        <SwiperSlide>
          <figure className="snip1527">
            <div className="image">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/pr-sample25.jpg"
                alt="pr-sample25"
              />
            </div>
            <figcaption>
              <div className="date">
                <span className="day">01</span>
                <span className="month">Dec</span>
              </div>
              <h3>Down with this sort of thing</h3>
              <p>
                I don&#39;t need to compromise my principles, because they
                don&#39;t have the slightest bearing on what happens to me
                anyway.
              </p>
            </figcaption>
            <a href="#"></a>
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure className="snip1527">
            <div className="image">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/pr-sample25.jpg"
                alt="pr-sample25"
              />
            </div>
            <figcaption>
              <div className="date">
                <span className="day">01</span>
                <span className="month">Dec</span>
              </div>
              <h3>Down with this sort of thing</h3>
              <p>
                I don&#39;t need to compromise my principles, because they
                don&#39;t have the slightest bearing on what happens to me
                anyway.
              </p>
            </figcaption>
            <a href="#"></a>
          </figure>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
