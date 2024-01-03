import { Container, Card } from "react-bootstrap";
import Masonry from "react-masonry-css";
import { Swiper } from "swiper/react";
import { useState, useEffect } from "react";

interface VideoItem {
  id: number;
  imageUrl: string;
  title: string;
  content: string;
}

const VideoGrid: React.FC = () => {
  const items: VideoItem[] = [
    {
      id: 1,
      imageUrl: "https://placekitten.com/300/200", // Replace with your image URL
      title: "Item 1",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      imageUrl: "https://placekitten.com/400/300", // Replace with your image URL
      title: "Item 2",

      content:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      imageUrl: "https://placekitten.com/400/300", // Replace with your image URL
      title: "Item 2",
      content:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 4,
      imageUrl: "https://placekitten.com/400/300", // Replace with your image URL
      title: "Item 2",
      content:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 5,
      imageUrl: "https://placekitten.com/400/300", // Replace with your image URL
      title: "Item 2",
      content:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.adadaaddd",
    },
    {
      id: 6,
      imageUrl: "https://placekitten.com/400/300", // Replace with your image URL
      title: "Item 2",
      content:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  const [favoriteStates, setFavoriteStates] = useState<boolean[]>(() => {
    // Initialize favorite states from localStorage, or set all to false
    const storedStates = localStorage.getItem("favoriteStates");
    return storedStates
      ? JSON.parse(storedStates)
      : Array(items.length).fill(false);
  });

  useEffect(() => {
    // Update localStorage when favoriteStates change
    localStorage.setItem("favoriteStates", JSON.stringify(favoriteStates));
  }, [favoriteStates]);

  const handleToggleFavorite = (index: number) => {
    const newFavoriteStates = [...favoriteStates];
    newFavoriteStates[index] = !newFavoriteStates[index];
    setFavoriteStates(newFavoriteStates);
  };

  const breakpointColumnsObj = {
    default: 4,
    1100: 2,
    700: 1,
  };

  return (
    <Container
      fluid
      data-aos="fade-down"
      data-aos-duration="700"
      className=" border-2 "
    >
      <Swiper>
        <h1 className="text-center fw-medium p-3 ">Video Gallery</h1>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid mt-2 "
          columnClassName="my-masonry-grid_column"
        >
          {items.map((item, index) => (
            <Card
              key={item.id}
              className="pinterest-grid-item"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="500ms"
            >
              <Card.Img
                variant="top"
                src={item.imageUrl}
                loading="lazy"
                alt={item.title}
              />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill={favoriteStates[index] ? "danger" : "none"}
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-heart"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
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
      </Swiper>
    </Container>
  );
};

export default VideoGrid;
