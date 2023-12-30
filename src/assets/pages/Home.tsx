import Avenger from "../img/Moviesimg/avengers-endgame.jpg";
import spiderman from "../img/Moviesimg/hd_spiderman_no_way_home.jpg";
import marvel from "../img/Moviesimg/Marvel.jpg";
import ImagetGrid from "../components/VideoGrid";

const Home = () => {
  return (
    <>
      <div id="carouselExampleDark" className="carousel carousel-dark slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="5000">
            <img src={marvel} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="text-light fw-medium fs-2">
                Coctor Strange Multiverse of Madness
              </h5>
              <p className="text-light">
                Doctor Strange in the Multiverse of Madness is a 2022 American
                superhero film based on Marvel Comics featuring the character
                Doctor Strange.
              </p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={Avenger} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block text-light">
              <h5 className="text-light fw-medium fs-2">Avengers End Game</h5>
              <p className="text-light">
                Endgame is a 2019 American superhero film based on the Marvel
                Comics superhero team the Avengers.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={spiderman} className="d-block w-100 h-50" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="text-light fw-medium fs-2">
                Spiderman No Way Home
              </h5>
              <p className="text-light">
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev "
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
          style={{ color: "white" }}
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="Videogrid">
        <ImagetGrid />
      </div>
    </>
  );
};
export default Home;
