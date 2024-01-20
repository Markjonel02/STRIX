import { Container, Card } from "react-bootstrap";
import Masonry from "react-masonry-css";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useFavorites } from "../Context/FavoriteContext";
import "react-lazy-load-image-component/src/effects/blur.css";
import "swiper/swiper-bundle.css";

// Define the type for each video item

export interface VideoItem {
  id: number;
  imageUrl: string;
  title: string;
  content: string;
  genre: string;
}

const Movies: React.FC = () => {
  // Sample video items

  const { addToFavorites, removeFromFavorites } = useFavorites();

  const items: VideoItem[] = [
    {
      id: 1,
      imageUrl: "https://placekitten.com/300/200",
      title: "Item 1",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      genre: "comedy",
    },
    {
      id: 2,
      imageUrl: "https://placekitten.com/400/300",
      title: "Item 2",
      genre: "Rom-com",
      content:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      imageUrl: "https://placekitten.com/400/300",
      title: "Item 2",
      content:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      genre: "Horror",
    },
    {
      id: 4,
      imageUrl: "https://placekitten.com/400/300",
      title: "Item 2",
      content:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      genre: "Action",
    },
    {
      id: 5,
      imageUrl: "https://placekitten.com/400/300",
      title: "Item 2",
      content:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.adadaaddd",
      genre: "Documentary",
    },
    {
      id: 6,
      imageUrl: "https://placekitten.com/400/300",
      title: "Sample 6",
      content:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      genre: "Crime",
    },
  ];

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
    <Container fluid data-aos="fade-right " data-aos-duration="700">
      <Swiper>
        <SwiperSlide>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid mt-5"
            columnClassName="my-masonry-grid_column"
          >
            {/* Map through video items and render each as a Card */}
            {items.map((item, index) => (
              <Card
                key={item.id}
                className="pinterest-grid-item"
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
                />
                {/* Card body containing title, content, and favorite checkbox */}
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>
                    <p>{` Category: ${item.genre}`}</p>
                  </Card.Text>
                  <Card.Text>{item.content}</Card.Text>

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
                        <span className="option-2">Added to Favorites</span>
                      ) : (
                        <span className="option-1">Add to Favorites</span>
                      )}
                    </div>
                  </label>
                </Card.Body>
              </Card>
            ))}
          </Masonry>
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default Movies;
