import { useFavorites } from "../Context/FavoriteContext";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons/faPlay";

const FavoritesPage: React.FC = () => {
  const { favorites } = useFavorites();

  const breakpoints = {
    577: {
      slidesPerView: 1.75,
      spaceBetween: 5,
    },
    877: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 4.5,
    },
  };
  //icon
  const i = <FontAwesomeIcon icon={faTrash} />;
  const p = <FontAwesomeIcon icon={faPlay} />;

  return (
    <div className=" d-flex justify-content-center align-items-center text-light vh-100">
      {favorites.length === 0 ? (
        <div className="tit d-flex  justify-content-center ">
          <h1 className="text-center ">No Favorites yet!</h1>
        </div>
      ) : (
        <Swiper
          className="mySwiper container-fluid"
          pagination={{ clickable: true }}
          breakpoints={breakpoints}
        >
          {favorites.map((item) => (
            <SwiperSlide
              className="swiper-container d-flex flex-nowrap p-2 position-relative"
              key={item.id}
            >
              <div className="card-animation-cont d-flex">
                <div className="cards" id="cards">
                  <img src={item.imageUrl} alt="" />
                  <div className="info">
                    <strong>{item.title}</strong>
                    <span className="sub-title">{item.genre}</span>
                    <hr />
                    <div className="hide-info mb-4">
                      W
                      <span className="text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        <div className="butt-cont d-flex">
                          <button className="btn btn-outline-success ms-2 mt-2 ">
                            Watch <span>{p}</span>
                          </button>
                          <button className="btn btn-outline-danger ms-2 mt-2">
                            Delete<span>{i}</span>
                          </button>
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default FavoritesPage;
