import { useEffect, useState } from "react";
import Navbar from "./Navbar";

const predefinedStyles = {
  backgroundColor: "background-color: rgba(17, 25, 40, 0.15)",
  backdropFilter: "backdrop-filter: blur(1px) saturate(170%)",
  WebkitBackdropFilter: "-webkit-backdrop-filter: blur(1px) saturate(170%)",
};

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup by removing the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isScrolling = scrollPosition > 100;

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark fixed-top pt-3 ${
        isScrolling ? "bg-dark shadow" : {}
      }`}
      style={isScrolling ? {} : predefinedStyles}
    >
      <div className="container-fluid d-flex justify-content-between ">
        <div className="img-container ">
          <h6 className="fw-bolder fs-2 text-light  ms-md-5  ">MovieFlix</h6>
        </div>

        <div className="button">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <div
          className="collapse navbar-collapse justify-content-end me-5"
          id="navbarNav"
        >
          <Navbar />
        </div>
      </div>
    </nav>
  );
};

export default Header;
