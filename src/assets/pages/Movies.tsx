import { Container, Card } from "react-bootstrap";
import Masonry from "react-masonry-css";
import { Swiper, SwiperSlide } from "swiper/react";
import Series from "./Series";
import { useState, useEffect, useMemo } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useFavorites } from "../Context/FavoriteContext";
import "react-lazy-load-image-component/src/effects/blur.css";
import "swiper/swiper-bundle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import MovieSlider from "./MovieSlider";
/* image */
import Avenger from "../img/Moviesimg/avengers-endgame.jpg";
import spiderman from "../img/Moviesimg/hd_spiderman_no_way_home.jpg";
import marvel from "../img/Moviesimg/Marvel.jpg";
import avengers from "../img/Moviesimg/avengers-poster-wallpapers.jpg";
import maleficent from "../img/Moviesimg/maleficent-4k-wallpapers.jpg";
import marvels from "../img/Moviesimg/marvel-4k-wallpapers.jpg";
import shrek from "../img/Moviesimg/shrek-the-movie-wallpapers.jpg";
import terminator from "../img/Moviesimg/terminator-genisys-movie-wallpapers.jpg";
import conjuring from "../img/Moviesimg/the-conjuring-3-wallpapers.jpg";
import venom from "../img/Moviesimg/venom-let-there-be-carnage-movie-wallpapers.jpg";
import blackpanther from "../img/Moviesimg/BlackPanther.jpg";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/swiper-bundle.css";
import Aos from "aos";
import "aos/dist/aos.css";

// Define the type for each video item

export interface VideoItem {
  id: number;
  imageUrl: string;
  title: string;
  content: string;
  genre: string;
}

//truncating text
interface TruncatedTextProps {
  content: string;
  maxLength: number;
}

const TruncatedText: React.FC<TruncatedTextProps> = ({
  content,
  maxLength,
}) => {
  const truncatedText =
    content.length > maxLength ? `${content.slice(0, maxLength)}...` : content;

  return (
    <div
      style={{
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
      }}
    >
      {truncatedText}
    </div>
  );
};

const Movies: React.FC = () => {
  useEffect(() => {
    Aos.init();
    return () => {
      Aos.refresh();
    };
  });

  // Sample video items
  const i = (
    <FontAwesomeIcon
      icon={faCheckCircle}
      className="mx-2  bg-success rounded-5"
    />
  );
  const { addToFavorites, removeFromFavorites } = useFavorites();

  const items: VideoItem[] = [
    {
      id: 1,
      imageUrl: avengers,
      title: "Avengers Infinity War",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      genre: "Action,Sci-fi,superheroes",
    },
    {
      id: 2,
      imageUrl: maleficent,
      title: "Maleficent",
      genre: "Romance, Drama",
      content:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      imageUrl: marvels,
      title: "Captain Marvel",
      content:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      genre: "superheroes",
    },
    {
      id: 4,
      imageUrl: shrek,
      title: "Shrek",
      content:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      genre: "comedy, romance, drama",
    },
    {
      id: 5,
      imageUrl: terminator,
      title: "Terminator",
      content:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.adadaaddd",
      genre: "Action",
    },
    {
      id: 6,
      imageUrl: conjuring,
      title: "Conjuring",
      content:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      genre: "Horror,Supernatural,exorcist",
    },
    {
      id: 7,
      imageUrl: venom,
      title: "Venom Let there be carnage",
      content:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      genre: "Action",
    },
    {
      id: 8,
      imageUrl: blackpanther,
      title: "Black Panther",
      content:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      genre: "Action,Adventure",
    },
  ];

  // State for search queries and filtered movies
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredMovies, setFilteredMovies] = useState<VideoItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  // Function to handle changes in the search input
  const handleSearchInputChange = (value: string) => {
    setSearchQuery(value);
    setLoading(true); // Set loading state when a search query is entered
  };

  // Filter movies based on search query
  useEffect(() => {
    const filtered = items.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    // Simulate delay for lazy loading effect
    setTimeout(() => {
      setFilteredMovies(filtered);
      setLoading(false); // Reset loading state after filtering is done
    }, 500); // Adjust delay as needed
  }, [searchQuery, items]);

  // Memoize the filtered movies to prevent unnecessary re-renders
  const memoizedFilteredMovies = useMemo(
    () => filteredMovies,
    [filteredMovies]
  );

  /* toast */
  const [Toast, setToast] = useState<string>("");
  const [Showtoast, setShowtoast] = useState(false);
  const Handletoast = (index: number) => {
    const sel = items[index];
    setShowtoast(!Showtoast);

    // Set a timer to hide the toast after 3000 milliseconds
    setTimeout(() => {
      setShowtoast(false);
    }, 3000);

    setToast(sel.title);
  };

  // State to track favorite status of each video item
  const [favoriteStates, setFavoriteStates] = useState<boolean[]>(() => {
    // Initialize favorite states from localStorage or set all to false
    const storedStates = localStorage.getItem("favoriteStates");
    return storedStates
      ? JSON.parse(storedStates)
      : Array(items.length).fill(false);
  });

  const [favoriteCount, setfavoriteCount] = useState<number>(() => {
    const storedCounts = localStorage.getItem("favoriteCount");
    return storedCounts ? parseInt(storedCounts, 10) : 0;
  });

  // Update localStorage when favoriteStates change
  useEffect(() => {
    localStorage.setItem("favoriteStates", JSON.stringify(favoriteStates));
  }, [favoriteStates]);

  useEffect(() => {
    localStorage.setItem("favoriteCount", JSON.stringify(favoriteCount));
  }, [favoriteCount]);

  // Handle toggling the favorite status of a video item
  const handleToggleFavorite = (index: number) => {
    const newFavoriteStates = [...favoriteStates];
    newFavoriteStates[index] = !newFavoriteStates[index];
    setFavoriteStates(newFavoriteStates);

    const update = newFavoriteStates.filter((state) => state).length;
    setfavoriteCount(update);

    const selectedItems = items[index];
    if (!favoriteStates[index]) {
      addToFavorites(selectedItems);
      Handletoast(index);
    } else {
      handleRemoveFromFavorites(selectedItems); //
    }
  };

  const handleRemoveFromFavorites = (items: VideoItem) => {
    removeFromFavorites(items);
  };

  // Define the responsive columns for the Masonry layout
  const breakpointColumnsObj = {
    default: 4,
    1100: 2,
    700: 1,
    877: 1.75,
  };

  return (
    <>
      <div className="Movie-slider">
        <Swiper
          pagination={{ dynamicBullets: true, clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          effect="fade"
          loop={true}
          modules={[Autoplay, EffectFade, Pagination]}
        >
          <SwiperSlide data-aos="" lazy>
            <MovieSlider
              data-aos="zoom-in"
              imageUrl={marvel}
              alt="Doctor Strange Multiverse of Madness"
              title="Only in MovieFlix"
              description="MovieFlix is the home of amazing original programming that you can’t find anywhere else. Movies, TV shows, specials, and more, all tailored specifically to you."
            />
          </SwiperSlide>

          <SwiperSlide>
            <MovieSlider
              imageUrl={Avenger}
              alt="Avengers End Game"
              title="Only in MovieFlix"
              description="MovieFlix is the home of amazing original programming that you can’t find anywhere else. Movies, TV shows, specials, and more, all tailored specifically to you."
            />
          </SwiperSlide>
          <SwiperSlide>
            <MovieSlider
              imageUrl={spiderman}
              alt="Spiderman No Way Home"
              title="Only in MovieFlix"
              description="MovieFlix is the home of amazing original programming that you can’t find anywhere else. Movies, TV shows, specials, and more, all tailored specifically to you."
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="container d-flex  mt-5  mb-4">
        <div className="left-content">
          <h1 className="text-light fs-4 fw-light mx-md-5 ">Discover</h1>
        </div>
        <div className="right-content ">
          <form className="d-flex justify-content-end ">
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchQuery}
              onChange={(e) => handleSearchInputChange(e.target.value)}
              style={{ width: "300px" }}
            />
          </form>
        </div>
      </div>
      <Container
        data-aos="fade-right "
        data-aos-duration="700"
        className="dc-grid mt-2  "
      >
        {loading && (
          <div className=" d-flex justify-content-center  ">
            <svg viewBox="25 25 50 50" className="svs">
              <circle r="20" cy="50" cx="50" className="circles"></circle>
            </svg>
          </div>
        )}
        {!loading && searchQuery && memoizedFilteredMovies.length === 0 && (
          <div className="d-flex justify-content-center align-items-center mt-5 text-light">
            <h1 className="fw-bold">No results found.</h1>
          </div>
        )}
        {/* if found 1  movie, use singular else use plural */}
        {!loading && searchQuery && memoizedFilteredMovies.length > 0 && (
          <h1 className="fw-bold text-center mt-5 mb-3 text-light">
            {memoizedFilteredMovies.length} result
            {memoizedFilteredMovies.length > 1 ? "s" : ""} found
          </h1>
        )}
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid shadow-1 "
          columnClassName="my-masonry-grid_column"
        >
          {/* Map through video items and render each as a Card */}
          {!loading &&
            memoizedFilteredMovies.map((item, index) => (
              <Card
                key={item.id}
                className="grid-item"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="500ms"
              >
                {/* Lazy-loaded image with blur effect */}
                <LazyLoadImage
                  alt={item.title}
                  height="100%"
                  src={item.imageUrl}
                  width="100%"
                  effect="blur"
                  wrapperClassName="lazy-image-wrapper"
                  className=" rounded "
                />
                {/* Card body containing title, content, and favorite checkbox */}
                <Card.Body>
                  <Card.Title className=" fw-semibold ">
                    {item.title}
                  </Card.Title>
                  <Card.Text>
                    <p>{` Category: ${item.genre}`}</p>
                  </Card.Text>
                  <Card.Text>
                    <TruncatedText content={item.content} maxLength={30} />
                  </Card.Text>

                  <input
                    type="checkbox"
                    checked={favoriteStates[index]}
                    id={`favorite-${index}`}
                    name={`favorite-checkbox-${index}`}
                    value={`favorite-button-${index}`}
                    onChange={() => handleToggleFavorite(index)}
                  />
                  <label htmlFor={`favorite-${index}`} className="container">
                    {/* Heart icon indicating favorite status */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill={favoriteStates[index] ? "red" : "none"}
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-heart"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                    {/* Display whether the item is added to favorites or not */}
                    <div className="action">
                      {favoriteStates[index] ? (
                        <span className="option-2 shadow ">
                          Added to Favorites
                        </span>
                      ) : (
                        <span className="option-1 shadow ">
                          Add to Favorites
                        </span>
                      )}
                    </div>
                  </label>
                </Card.Body>
              </Card>
            ))}
        </Masonry>
        <div className="Toast-con position-fixed   end-0 p-3">
          {
            <div
              id="liveToast"
              className={`toast ${Showtoast ? "show " : "hide"} `}
              role="alert"
              aria-live="assertive"
              aria-atomic="true"
              data-aos="fade-up-left"
            >
              <div className="toast-header bg-success-subtle ">
                <strong className="me-auto">
                  {i}
                  {Toast}
                </strong>
                <small>justnow...</small>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="toast"
                  aria-label="Close"
                  onClick={() => setShowtoast(false)}
                ></button>
              </div>
              <div className="toast-body">
                {`The ${Toast} has been added to Favorites `}
              </div>
            </div>
          }
        </div>
        <div className="container-fluid mt-5 py-3">
          <span className="d-flex fs-5 fw-bold text-light mb-2 ">
            Popular Series
          </span>
          <Series />
        </div>
      </Container>
    </>
  );
};

export default Movies;
