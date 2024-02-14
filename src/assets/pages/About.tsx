import about from "../img/pexels-tima-miroshnichenko-7991269.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const imgProperty = {
  radius: 20,
  imgSrc: about,
  alt: "aboutimage",
};

const About = () => {
  useEffect(() => {
    Aos.init();
    return () => {
      Aos.refresh();
    };
  }, []);
  return (
    <>
      <div className="about-container about">
        <div className="aoverlay"></div>
        <div className="about-section w-100 vh-100 d-flex align-items-center justify-content-start flex-wrap">
          <div
            className="text-acontainer ms-5"
            data-aos="zoom-in-up"
            data-aos-duration="500ms"
            data-aos-delay="300"
          >
            <h1 className="mb-4">Welcome to MovieFlix</h1>
            <span className="sub-text mt-5">
              Experienced the best Movies Quality watch with family, friends,
              and kids.
            </span>
            <div className="button mt-2">
              <button
                className="rounded mt-4 p-2 px-2 fw-bold fs-4 btn btn-outline-secondary"
                style={{
                  height: "4.5rem",
                  width: "20.5rem",
                }}
              >
                Get Started{" "}
              </button>
            </div>
          </div>
        </div>

        <div className="container about-MovieFlix d-flex mx-auto  justify-content-center align-items-center mt-xl-5 text-light py-5">
          <div className="row">
            <div className="col-md-6">
              <div className="text-content ">
                <h1
                  className="fw-bolder"
                  style={{ fontSize: "4.1rem" }}
                  data-aos="fade-right"
                  data-aos-duration="500ms"
                  data-aos-delay="150"
                >
                  About MovieFlix
                </h1>
                <p
                  className="about-sub-text"
                  style={{ whiteSpace: "pre-wrap", fontSize: "1.2rem" }}
                  data-aos="fade-right"
                  data-aos-duration="200ms"
                  data-aos-delay="300"
                >
                  "Where every click becomes a cinematic journey. Welcome to
                  Movieflix Services, where your screen comes to life with
                  endless stories waiting to unfold."
                </p>
                <button
                  className="rounded mt-4 p-2 px-2 fw-bold fs-4 btn btn-outline-secondary"
                  style={{
                    height: "4.5rem",
                    width: "20.5rem",
                  }}
                >
                  Watch Now
                </button>
              </div>
            </div>
            <div className="col-md-6">
              <div
                className="image-content"
                data-aos="fade-down"
                data-aos-duration="300ms"
              >
                <img
                  src={imgProperty.imgSrc}
                  alt={imgProperty.alt}
                  className="imgs w-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
