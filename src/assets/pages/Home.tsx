import { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import img from "../img/tv.png";
import dl from "../img/modbile.jpg";
import kids from "../img/kids.png";
import watching from "../img/watching.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Video from "../img/About-Svg/production_id_4010131 (2160p).mp4";
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
    background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${watching}) center no-repeat`,
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
    fontSize: "3.3rem",
    fontWeight: "bolder",
    color: "white",
  };
  return (
    <>
      <div className="home" style={parallaxStyles}>
        <div className="" style={parallaxStyle}>
          <div className="" style={textOverlayContainerStyle}>
            <h2
              className="text-overlay"
              style={textOverlayStyle}
              data-aos="zoom-in-up"
              data-aos-duration="800"
              data-aos-delay="500"
            >
              STRIX
            </h2>

            <h6
              className="sub-title text-white  fs-5 "
              data-aos="zoom-in-up"
              data-aos-duration="900"
              data-aos-delay="1000"
            >
              Experience the <span></span>
              <span className="span-shadow text-capitalize shadow-lg">
                best and quality movies
              </span>
              , TV series, <br />
              and more just for you.
            </h6>
          </div>
        </div>
      </div>
      <div className="tv-section bg-black mt-2 position-relative d-flex justify-content-center align-items-center text-start  py-5">
        <div className="text-container text-light mb-3" data-aos="zoom-in-up">
          <h1 className="fs-1 fw-bold mt-2 ">
            <strong>Enjoy on your TV</strong>
          </h1>
          <span className="subtext fs-4">
            Watch on Smart TVs, Playstation, Xbox,
            <br />
            Chromecast, Apple TV, Blu-ray players, and more.
          </span>
        </div>

        <div
          className="tv-video position-relative mt-3"
          data-aos="fade"
          data-aos-duration="1000"
          data-a0s-delay="900"
        >
          <video autoPlay loop muted className="top-image">
            <source src={Video} type="video/mp4" />
          </video>
          <LazyLoadImage
            src={img}
            alt="Image"
            effect="blur"
            width="100%"
            height="auto"
            loading="lazy"
            className="bottom-image img-fluid"
          />
        </div>
      </div>

      <div className="Download-mobile mt-2 bg-black position-relative d-flex justify-content-center align-items-center py-5">
        <div className="img-DL" data-aos="zoom-in">
          <LazyLoadImage
            src={dl}
            alt="Download"
            effect="blur"
            width="100%"
            height="auto"
            loading="lazy"
          />
        </div>
        <div className="text-dl-container text-light text-start  ">
          <h1 className=" fw-bolder">
            <strong>
              Download your <br />
              <span>shows to watch </span>
              <br />
              <span>offline</span>
            </strong>
          </h1>
          <span className=" subtext fs-4">
            Save your favorites easily and always have
            <span style={{ display: "block" }}> something to watch.</span>
          </span>
        </div>
      </div>

      <div className="watch-e mt-2 bg-black  position-relative text-light justify-content-center align-items-center  text-center py-5">
        <div className="text-watch p-5 ms-xl-5 ">
          <h1 className="fs-1 fw-bold flex-wrap">
            <strong>Watch everywhere</strong>
          </h1>
          <span className="fs-4">
            Stream unlimited movies and TV
            <span>
              shows on your phone, <br />
              tablet, laptop,
            </span>
            and TV.
          </span>
        </div>
      </div>

      <div className="Download-mobile mt-2 bg-black position-relative d-flex justify-content-center align-items-center py-5 ">
        <div className="img-DL ms-sm-4" data-aos="zoom-in">
          <LazyLoadImage
            src={kids}
            alt="Download"
            effect="blur"
            width="100%"
            height="auto"
            loading="lazy"
          />
        </div>

        <div className="k-text text-light mb-3" style={{ display: "block" }}>
          <h1 className="fs-1 fw-bold mt-2">
            <strong>Create profiles for kids</strong>
          </h1>
          <span className="kids-span fs-4" style={{ display: "block" }}>
            Send kids on adventures with their favorite characters in a space
            made just for them—free with your membership.
          </span>
        </div>
      </div>
    </>
  );
};

export default Home;
