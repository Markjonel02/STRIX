import { Container, Card } from "react-bootstrap";
import Masonry from "react-masonry-css";
import "../../../index.css";
import { Swiper } from "swiper/react";
const VideoGrid = () => {
  const items = [
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
    // Add more items as needed
  ];

  const breakpointColumnsObj = {
    default: 4,
    1100: 2,
    700: 1,
  };

  return (
    <Container fluid data-aos="fade-down" data-aos-duration="700">
      <Swiper>
        <h1 className="text-center fw-medium p-3 ">Video Gallery</h1>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid mt-2 "
          columnClassName="my-masonry-grid_column"
        >
          {items.map((item) => (
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
              </Card.Body>
            </Card>
          ))}
        </Masonry>
      </Swiper>
    </Container>
  );
};

export default VideoGrid;
