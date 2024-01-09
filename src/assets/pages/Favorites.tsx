import React from "react";
import { useFavorites } from "../Context/FavoriteContext";
import { VideoItem } from "./Movies";

const FavoritesPage: React.FC = () => {
  const { favorites } = useFavorites();
  // Sample video items (replace with your actual items array)
  const items: VideoItem[] = [
    // ... (other items)
    {
      id: 1,
      imageUrl: "https://placekitten.com/300/200", // Replace with your image URL
      title: "Item 1",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      genre: "comedy",
    },
    {
      id: 2,
      imageUrl: "https://placekitten.com/400/300", // Replace with your image URL
      title: "Item 2",
      genre: "Rom-com",
      content:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      imageUrl: "https://placekitten.com/400/300", // Replace with your image URL
      title: "Item 2",
      content:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      genre: "Horror",
    },
    {
      id: 4,
      imageUrl: "https://placekitten.com/400/300", // Replace with your image URL
      title: "Item 2",
      content:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      genre: "Action",
    },
    {
      id: 5,
      imageUrl: "https://placekitten.com/400/300", // Replace with your image URL
      title: "Item 2",
      content:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.adadaaddd",
      genre: "Documentary",
    },
  ];

  return (
    <div>
      <h1>Favorites Page</h1>
      {favorites.map((item) => (
        <div key={item.id}>
          <p>{item.title}</p>
          {/* Add other details as needed */}
        </div>
      ))}
    </div>
  );
};

export default FavoritesPage;
