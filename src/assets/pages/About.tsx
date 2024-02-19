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
        <div className="about-section w-100 vh-100 d-flex align-items-center justify-content-center flex-wrap">
          <div
            className="text-acontainer"
            data-aos="zoom-in-up"
            data-aos-duration="500ms"
            data-aos-delay="300"
          >
            <h1 className="mb-3">Welcome to MovieFlix</h1>
            <p className="sub-text mt-3 d-flex  justify-content-center align-items-center text-center">
              Experienced the best Movies Quality watch with family, friends,
              and kids.
            </p>
            <div className="button mt-2 d-flex justify-content-center  align-items-center">
              <button
                className="t-4 p-2 fw-bold fs-4 btn btn-outline-secondary text-light"
                style={{
                  height: "4.5rem",
                  width: "14.5rem",
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
          <div className="row d-flex justify-content-center">
            <div className="col-md-6">
              <div className="text-content mb-5 ">
                <h1
                  className=" titles "
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
                  className="btn-watch d-flex justify-content-center align-items-center t-4 p-2 px-2 fw-bold fs-4 btn btn-outline-danger"
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

        <div className="container mt-5 mb-5 py-5 shadow">
          <div className="benefits-container">
            <h1
              className="btitles  text-light mb-3"
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
                  <p className="card-title">Card 1</p>
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
                  <p className="card-title">Card 2</p>
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
                  <p className="card-title">Card 3</p>
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
                  <p className="card-title">Card 4</p>
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

        {/* FAQ SEction */}
        <div className="FAQ container d-flex flex-column mb-5 py-5">
          <div className="faq-title text-light ">
            <h1 className="fs-2 mb-4" style={{ fontWeight: "800" }}>
              MovieFlix FAQ
            </h1>
          </div>
          <div className="wrapper d-flex justify-content-between align-items-center flex-column mb-4">
            <div className="faq-clicker w-100 d-flex justify-content-between   p-2  ">
              <h4 className="text-center d-flex justify-content-center  align-items-center ">
                Q: Can I download movies and TV shows for offline viewing?
              </h4>
              <button className="circular-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="tranparent"
                  className=" plus w-6 h-6 "
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div className="plus-clicked ">
              <ul>
                <li>
                  <p className="para">
                    A: Yes, MovieFlix allows users to download select movies and
                    TV shows for offline viewing. This feature is available on
                    the MovieFlix app for mobile devices. Simply find the title
                    you want to download, and look for the download icon next to
                    it.
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="wrapper d-flex justify-content-between align-items-center flex-column mb-4">
            <div className="faq-clicker w-100 d-flex justify-content-between   p-2  ">
              <h4 className="text-center d-flex justify-content-center  align-items-center ">
                Q: Are there different subscription plans available?
              </h4>
              <button className="circular-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className=" plus w-6 h-6 "
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div className="plus-clicked ">
              <ul>
                <li>
                  <p className="para">
                    A: MovieFlix offers different subscription tiers to cater to
                    varying user needs. These may include options for streaming
                    in HD, simultaneous streaming on multiple devices, and
                    ad-free viewing experiences. Pricing and features of each
                    plan may vary.
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="wrapper d-flex justify-content-between align-items-center flex-column mb-4">
            <div className="faq-clicker w-100 d-flex justify-content-between   p-2  ">
              <h4 className="text-center d-flex justify-content-center  align-items-center ">
                Q: Can I cancel my MovieFlix subscription at any time?
              </h4>
              <button className="circular-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className=" plus w-6 h-6 "
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div className="plus-clicked ">
              <ul>
                <li>
                  <p className="para">
                    A: Yes, you can cancel your MovieFlix subscription at any
                    time. There are no long-term contracts, and you can easily
                    manage your subscription settings through your account
                    dashboard. Keep in mind that cancellation may result in the
                    loss of access to the MovieFlix content library.
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="wrapper d-flex justify-content-between align-items-center flex-column mb-4">
            <div className="faq-clicker w-100 d-flex justify-content-between   p-2  ">
              <h4 className="text-center d-flex justify-content-center  align-items-center ">
                Q: Are there different subscription plans available?
              </h4>
              <button className="circular-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className=" plus w-6 h-6 "
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div className="plus-clicked ">
              <ul>
                <li>
                  <p className="para">
                    A: MovieFlix offers different subscription tiers to cater to
                    varying user needs. These may include options for streaming
                    in HD, simultaneous streaming on multiple devices, and
                    ad-free viewing experiences. Pricing and features of each
                    plan may vary.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Contact Us */}

        <div className="container">
          <div className="row">
            {/* Contact Section */}
            <div className="col-md-6">
              <div className="Contact wrapper d-flex flex-column">
                <div className="Contact-content">
                  <h1 className="ctitles text-light">Contact Us</h1>
                  <div className="Phone">
                    <p>Phone</p>
                    <a href="tel:+1-555-555-5555">222</a>
                  </div>
                  <div className="Email">
                    <p>Email</p>
                    <a href="mailto:info@movieflix.com">info@movieflix.com</a>
                  </div>
                </div>
              </div>
            </div>
            {/* Form Section */}
            <div className="col-md-6">
              <div className="formemail">
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                  <input
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                  />
                  <label htmlFor="floatingPassword">Password</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
