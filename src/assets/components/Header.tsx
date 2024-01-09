/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Img from "../img/logo2.png";
import Navbar from "./Navbar";

const img = {
  size: 200,
  altname: "logo",
};

const predefinedStyles = {
  backdropFilter: "blur(16px) saturate(180%)",
  WebkitBackdropFilter: "blur(16px) saturate(180%);",
  backgroundColor: "rgba(17, 25, 40, 0.61)",
  border: "1px solid rgba(255, 255, 255, 0.125)",
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
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-dark fixed-top ${
          isScrolling ? "bg-dark" : ""
        }`}
        style={isScrolling ? {} : predefinedStyles}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={Img} alt={img.altname} style={{ width: img.size }} />
          </a>
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
          <div className="collapse navbar-collapse ms-4" id="navbarNav">
            <Navbar />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
