import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";
import "../index.css";
import { FavoritesProvider } from "./assets/Context/FavoriteContext.tsx";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { BrowserRouter as Router } from "react-router-dom";
import "@fortawesome/fontawesome-svg-core"; // Import the functions you need from the SDKs you need

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <FavoritesProvider>
      <Router>
        <App />
      </Router>
    </FavoritesProvider>
  </React.StrictMode>
);
