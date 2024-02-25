import about from "../img/pexels-tima-miroshnichenko-7991269.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

const imgProperty = {
  radius: 20,
  imgSrc: about,
  alt: "aboutimage",
};

type FAQItem = {
  question: string;
  answer: string;
};
const About = () => {
  const [rotatedIndexes, setRotatedIndexes] = useState<number[]>([]);

  const faqItems: FAQItem[] = [
    {
      question: "Can I download movies and TV shows for offline viewing?",
      answer:
        "Yes, MovieFlix allows users to download select movies and TV shows for offline viewing. This feature is available on the MovieFlix app for mobile devices. Simply find the title you want to download, and look for the download icon next to it.",
    },
    {
      question: "Are there different subscription plans available?",
      answer:
        "MovieFlix offers different subscription tiers to cater to varying user needs. These may include options for streaming in HD, simultaneous streaming on multiple devices, and ad-free viewing experiences. Pricing and features of each plan may vary.",
    },
    {
      question: "Can I cancel my MovieFlix subscription at any time?",
      answer:
        "Yes, you can cancel your MovieFlix subscription at any time. There are no long-term contracts, and you can easily manage your subscription settings through your account dashboard. Keep in mind that cancellation may result in the loss of access to the MovieFlix content library.",
    },
    {
      question: "Are subtitles available on MovieFlix?",
      answer:
        "Yes, MovieFlix offers subtitles for many of its titles in multiple languages. Users can enable subtitles while watching a movie or TV show by selecting their preferred language from the options provided.  ",
    },
  ];
  // Function to handle click event on FAQ item
  const handleRotate = (index: number) => {
    // If the index is already rotated, remove it from the state
    if (rotatedIndexes.includes(index)) {
      setRotatedIndexes(rotatedIndexes.filter((i) => i !== index));
    } else {
      // If the index is not rotated, add it to the state
      setRotatedIndexes([...rotatedIndexes, index]);
    }
  };
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

        {/* FAQ SECTION */}
        <div className="FAQ container d-flex flex-column mb-xl-5 py-5 ">
          <h2 className=" text-light fw-bolder mb-4">MovieFlix FAQ</h2>
          {/* Render FAQ items */}
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="wrapper d-flex justify-content-between align-items-center flex-column mb-4"
            >
              {/* FAQ question */}
              <div className="faq-clicker w-100 d-flex justify-content-between p-2">
                <h4 className="text-center d-flex justify-content-center align-items-center ">
                  {item.question}
                </h4>
                {/* Button to rotate FAQ item */}
                <button
                  onClick={() => handleRotate(index)}
                  className={`circular-button ${
                    rotatedIndexes.includes(index) ? "rotated" : ""
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="plus w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              {/* FAQ answer - Conditionally render based on rotatedIndexes state */}
              {rotatedIndexes.includes(index) && (
                <div className="plus-clicked active" data-aos="fade-down">
                  <ul>
                    <li>
                      <p className="para">{item.answer}</p>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Us */}
        <div className="Contact container">
          <div className="row">
            <div className="col-md-6" data-aos="fade-right">
              <div className="wrapper">
                <div className="Contact-content ">
                  <h1 className="ctitles text-light mb-5">Contact Us</h1>
                  <div className="Phone d-flex ">
                    <div className="content me-5">
                      <p className="text-light fs-5 fw-bold ">
                        {" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                          style={{ width: "25px", height: "30px" }}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                          />
                        </svg>{" "}
                        Phone{" "}
                      </p>
                      <a href="tel:+1-555-555-5555" className="text-light">
                        (63+) 0123 4567 890
                      </a>
                    </div>

                    <div className="Email me-5">
                      <p className="text-light fs-5 fw-bold">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                          style={{ width: "25px", height: "30px" }}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                          />
                        </svg>{" "}
                        Email
                      </p>
                      <a
                        href="mailto:info@movieflix.com"
                        className="text-light"
                      >
                        info@movieflix.com
                      </a>
                    </div>

                    <div className="address me-3">
                      <p className="text-light fs-5 fw-bold ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5 me-1"
                          style={{ width: "25px", height: "30px" }}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                          />
                        </svg>
                        Address
                      </p>
                      <p className="text-light">Cainta Rizal</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 bg-body-secondary p-5 rounded-4 mb-5"
              data-aos="fade-up"
            >
              <h1
                className="mb-4"
                style={{ fontSize: "50px", fontWeight: "800" }}
              >
                Get in Touch
              </h1>
              <form action="">
                <div className="mb-3">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <p className="mb-2 fs-6  fw-medium text-dark">
                          Firstname
                        </p>
                        <input
                          type="text"
                          className="form-control"
                          id="firstName"
                          placeholder="John"
                          style={{ height: "55px" }}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <p className="mb-2 fs-6  fw-medium text-dark">
                          Lastname
                        </p>
                        <input
                          type="text"
                          className="form-control"
                          id="lastName"
                          placeholder="Doe"
                          style={{ height: "55px" }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="email">
                    <p className="mb-2 fs-6  fw-medium text-dark">Email</p>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="name@example.com"
                      style={{ height: "55px" }}
                    />
                  </div>
                </div>

                <div className="form-floating mb-3">
                  <p className="mb-2 fs-6  fw-medium text-dark">Message</p>
                  <textarea
                    className="form-control "
                    style={{ height: "150px" }}
                    placeholder="Leave a comment here"
                  ></textarea>
                </div>
                <div className="btnsub d-flex">
                  <button
                    type="submit"
                    className="btn btn-dark fw-semibold fs-5 w-100 py-3 "
                  >
                    Send a Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
