/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Img from "../img/logo2.png";
import Navbar from "./Navbar";

const img = {
  size: 200,
  altname: "logo",
};

const styles = {
  backdropFilter: "blur(6px) saturate(120%)",
  WebkitBackdropFilter: "blur(6px) saturate(120%)",
  backgroundColor: "rgba(17, 25, 40, 0.61)",

  border: "1px solid rgba(255, 255, 255, 0.125)",
};
const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isChangecolor, setisChangecolor] = useState(true);

  const HandleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    const scrollThreshold = 100;

    setisChangecolor(scrollPosition < scrollThreshold);
  }, [scrollPosition]);

  useEffect(() => {
    window.addEventListener("scroll", HandleScroll);

    // Cleanup by removing the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", HandleScroll);
    };
  }, [HandleScroll]);

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-dark bg-${
          isChangecolor ? `dark` : ``
        } fixed-top`}
        style={isChangecolor ? {} : styles}
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
