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
            <p className="sub-text mt-5">
              Experienced the best Movies Quality watch with family, friends,
              and kids.
            </p>
            <div className="button mt-2">
              <button
                className="rounded mt-4 p-2 px-2 fw-bold fs-4 btn btn-outline-secondary"
                style={{
                  height: "4.5rem",
                  width: "20.5rem",
                }}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
        <div
          className="container about-MovieFlix d-flex mx-auto justify-content-center align-items-center mt-xl-5 text-light py-5"
          id="id"
        >
          <div className="row">
            <div className="col-md-6">
              <div className="text-content mb-5 ">
                <h1
                  className=" titles fw-bolder"
                  style={{ fontSize: "4.1rem" }}
                  data-aos="fade-right"
                  data-aos-duration="500ms"
                  data-aos-delay="150"
                >
                  About MovieFlix
                </h1>
                <p
                  className="sub-text"
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
                  className="btn-watch d-flex justify-content-center align-items-center rounded mt-4 p-2 px-2 fw-bold fs-4 btn btn-outline-danger"
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
        <div className="container mt-5 ">
          <div className="benefits-container">
            <h1
              className="btitles fw-bolder text-light mb-3"
              style={{ fontSize: "4.1rem" }}
              data-aos="fade-right"
              data-aos-duration="500ms"
              data-aos-delay="150"
            >
              Benefits
            </h1>

            <p
              className="sub-text text-light"
              style={{ whiteSpace: "pre-wrap", fontSize: "1.2rem" }}
              data-aos="fade-right"
              data-aos-duration="200ms"
              data-aos-delay="300"
            >
              Benefits of wacthing in MovieFlix gives you Entertainment.
            </p>
          </div>
          <div className="row py-4">
            <div className="col-md-3 mb-3" data-aos="zoom-in">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Card 1</h5>
                  <p className="card-text ">
                    Diverse selection of movies and TV shows.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-3" data-aos="zoom-in">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Card 2</h5>
                  <p className="card-text">
                    Exclusive original content just for you.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-3" data-aos="zoom-in">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Card 3</h5>
                  <p className="card-text">
                    Convenient streaming on any device.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-3" data-aos="zoom-in">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Card 4</h5>
                  <p className="card-text">
                    Ad-free experience and hiden fees.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="FAQ"></div>
      </div>
    </>
  );
};

export default About;
