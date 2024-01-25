import { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import gif from "../img/Colourful Multimedia Stream Play Button Icon Logo.gif";
import img from "../img/tv.png";
import dl from "../img/modbile.jpg";
import kids from "../img/kids.png";
import Footer from "../components/Footer";
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
    background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('./src/assets/img/watching.jpg') center no-repeat`,
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    filter: "brightness(100%)",
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
    filter: "brightness(100%)",
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
        <div className="text-container text-light mb-3" data-aos="zoom-in-up">
          <h1 className="fs-1 fw-bold mt-2 ">
            <strong>Enjoy on your TV</strong>
          </h1>
          <strong className="fs-4">
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </strong>
        </div>

        <div
          className="tv-video position-relative mt-3"
          data-aos="fade"
          data-aos-duration="1000"
          data-a0s-delay="900"
        >
          <img src={gif} alt="GIF" className="top-image img-fluid" />
          <img src={img} alt="Image" className="bottom-image img-fluid" />
        </div>
      </div>

      <div className="Download-mobile mt-3 pt-3 bg-black position-relative d-flex justify-content-center align-items-center ">
        <div className="img-DL" data-aos="zoom-in">
          <img
            src={dl}
            alt="Download"
            style={{ width: "500px" }}
            className="img-fluid"
          />
        </div>
        <div className="text-dl-container text-light text-center">
          <h1 className=" fw-bold d-flex flex-wrap ">
            <strong>Download your shows to watch offline </strong>
          </h1>
          <strong className="fs-4">
            Save your favorites easily and always have something to watch.
          </strong>
        </div>
      </div>

      <div className="watch-e mt-3 bg-black  position-relative text-light justify-content-start align-items-center ">
        <div className="text-watch p-5 ms-xl-5 ">
          <h1 className="fs-1 fw-bold flex-wrap">
            <strong>Watch everywhere</strong>
          </h1>

          <strong className="fs-4">
            Stream unlimited movies and TV
            <span> shows on your phone, tablet, laptop,</span>
            <br />
            and TV.
          </strong>
        </div>
      </div>

      <div className="watch-k bg-black mt-3 position-relative d-flex justify-content-center align-items-center text-center ">
        <div className="tv-video position-relative mt-3" data-aos="zoom-in">
          <img src={kids} alt="GIF" className="img-kids img-fluid" />
        </div>

        <div className="k-text text-light mb-3">
          <h1 className="fs-1 fw-bold mt-2 ">
            <strong>Create profiles for kids</strong>
          </h1>
          <strong className="fs-4">
            Send kids on adventures with their favorite characters in a space
            made just for them—free with your membership.
          </strong>
        </div>
      </div>
      <div className="footer mt-0" style={{ backgroundColor: "#131517ff" }}>
        <Footer />
      </div>
    </>
  );
};

export default Home;
