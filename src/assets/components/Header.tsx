import { useEffect, useState } from "react";
import Img from "../img/logo2.png";
import Navbar from "./Navbar";

const img = {
  size: 200,
  altname: "logo",
};

const predefinedStyles = {
  backdropFilter: "blur(3px) saturate(199%)",
  WebkitBackdropFilter: "blur(16px) saturate(180%)",
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
    <nav
      className={`navbar navbar-expand-lg navbar-dark fixed-top pt-3 ${
        isScrolling ? "" : "bg-dark "
      }`}
      style={isScrolling ? predefinedStyles : {}}
    >
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <div className="img-container me-3">
          <img src={Img} alt={img.altname} style={{ width: img.size }} />
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
          className="collapse navbar-collapse justify-content-center "
          id="navbarNav"
        >
          <Navbar />
        </div>
      </div>
    </nav>
  );
};

export default Header;
