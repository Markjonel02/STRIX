import { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import gif from "../img/Colourful Multimedia Stream Play Button Icon Logo.gif";
import img from "../img/tv.png";

const Home = () => {
  // aos
  useEffect(() => {
    Aos.init();
    return () => {
      Aos.refresh();
    };
  }, []);

  const [scrollPos, setScrollPos] = useState<number>(0);

  const handleScroll = () => {
    setScrollPos(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const parallaxStyles: React.CSSProperties = {
    position: "relative",
    width: "100%",
    height: "100vh",
    overflow: "hidden",
  };

  const parallaxStyle: React.CSSProperties = {
    content: "''",
    background: "url('./src/assets/img/watching.jpg') center no-repeat",
    backgroundSize: "cover",
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    filter: "grayscale(0.30)",
    transform: `translateZ(-1px) translateY(${scrollPos * 0.3}px)`,
    willChange: "transform",
    zIndex: -1,
  };

  const textOverlayContainerStyle: React.CSSProperties = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: `translate(-50%, -50%) translateY(${-scrollPos * 0.3}px)`,
    textAlign: "center",
    willChange: "transform",
  };

  const textOverlayStyle: React.CSSProperties = {
    fontSize: "5rem",
    fontWeight: "bolder",
    color: "white",
  };

  return (
    <>
      <div className="home" style={parallaxStyles}>
        <div className="" style={parallaxStyle}>
          <div style={textOverlayContainerStyle}>
            <h2
              className="text-overlay"
              style={textOverlayStyle}
              data-aos="zoom-in-up"
              data-aos-duration="800"
              data-aos-delay="500"
            >
              <i>MovieFlix</i>
            </h2>
            <strong
              data-aos="zoom-in-up"
              data-aos-duration="900"
              data-aos-delay="1000"
            >
              <h3 className="sub-title text-white  fw-semibold">
                Experience the <span></span>
                <span className="span-shadow text-capitalize shadow-lg">
                  best and quality movies
                </span>
                , TV series, and more just for you..
              </h3>
            </strong>
          </div>
        </div>
      </div>
      <div className="tv-section bg-black mt-3 position-relative d-flex justify-content-center align-items-center text-center ">
        <div className="text-container text-light mb-3">
          <h1 className="fs-1 fw-bold mt-2 ">
            <strong>Enjoy on your TV</strong>
          </h1>
          <strong className="fs-4">
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </strong>
        </div>
        <div className="tv-video position-relative mt-3">
          <img src={gif} alt="GIF" className="top-image img-fluid" />
          <img src={img} alt="Image" className="bottom-image img-fluid" />
        </div>
      </div>
      <div className="Download-mobile"></div>
    </>
  );
};

export default Home;
