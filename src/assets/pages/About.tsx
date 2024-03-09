import about from "../img/pexels-tima-miroshnichenko-7991269.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import Mobile from "../img/About-Svg/Devices.svg";
import manage from "../img/About-Svg/manage_search_white_24dp.svg";
import ads from "../img/About-Svg/ads_click_white_24dp.svg";
import interest from "../img/About-Svg/interests_white_24dp.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import reccomend from "../img/About-Svg/recommend_white_24dp.svg";
import watched from "../img/About-Svg/watched.mp4";
import message from "../sound/videoplayback.mp3";
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
  const breakpoints = {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    // when window width is >= 576px
    576: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 25,
    },
    // when window width is >= 992px
    992: {
      slidesPerView: 2.3,
      spaceBetween: 30,
      padding: 5,
    },
    // when window width is >= 1200px
    1200: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  };
  const [submitting, setSubmitting] = useState(false);
  const [to, setTo] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<boolean>(false);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/send-email", {
        from: to,
        text,
        html: text,
        firstName,
        lastName,
      });
      // Clear all fields
      setTo("");
      setText("");
      setFirstName("");
      setLastName("");
      setEmail(!email);
      setSubmitting(!submitting);
      setTimeout(() => {
        setEmail(false);
        setSubmitting(submitting);
      }, 3000);
      // Play sound effect
      const audio = new Audio(message);
      audio.play();
    } catch (error) {
/*       console.error("Error sending email:", error); */
      alert("Error sending email");
    }
  };

  const [rotatedIndexes, setRotatedIndexes] = useState<number[]>([]);

  const faqItems: FAQItem[] = [
    {
      question: "Can I download movies and TV shows for offline viewing?",
      answer:
        "Yes, STRIX allows users to download select movies and TV shows for offline viewing. This feature is available on the Strix web app for mobile devices. Simply find the title you want to download, and look for the download icon next to it.",
    },
    {
      question: "Are there different subscription plans available?",
      answer:
        "STRIX  offers different subscription tiers to cater to varying user needs. These may include options for streaming in HD, simultaneous streaming on multiple devices, and ad-free viewing experiences. Pricing and features of each plan may vary.",
    },
    {
      question: "Can I cancel my STRIX  subscription at any time?",
      answer:
        "Yes, you can cancel your STRIX  subscription at any time. There are no long-term contracts, and you can easily manage your subscription settings through your account dashboard. Keep in mind that cancellation may result in the loss of access to the strix content library.",
    },
    {
      question: "Are subtitles available on STRIX ?",
      answer:
        "Yes, STRIX  offers subtitles for many of its titles in multiple languages. Users can enable subtitles while watching a movie or TV show by selecting their preferred language from the options provided.  ",
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
    if (email) {
      setTimeout(() => {
        setEmail(false);
      }, 3000);
    }
  }, [email]);

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
            <h1 className="mb-3">Welcome to strix </h1>
            <p className="sub-text mt-3 d-flex  justify-content-center align-items-center text-center fs-5">
              Experienced the best Movies Quality watch with family, friends,
              and kids.
            </p>
            <div className="button mt-4 d-flex justify-content-center  align-items-center">
              <button
                className="t-4 p-2 fw-bold fs-4 btn btn-outline-danger text-light"
                style={{
                  height: "4.5rem",
                  width: "12.5rem",
                }}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>

        <div
          className="container about-MovieStrix d-flex mx-auto justify-content-center align-items-center mt-xl-5 text-light py-5"
          id="id"
        >
          <video className="video-background" autoPlay muted loop>
            <source src={watched} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="row d-flex justify-content-center  align-items-center ">
            <div className="col-md-6 d-flex justify-content-center align-items-center">
              <div className="text-content mb-5  mt-5 ">
                <h1
                  className=" titles  ms-1"
                  data-aos="fade-right"
                  data-aos-duration="500ms"
                  data-aos-delay="150"
                >
                  About STRIX
                </h1>
                <p
                  className="sub-text ms-1"
                  style={{ whiteSpace: "pre-wrap", fontSize: "1.2rem" }}
                  data-aos="fade-right"
                  data-aos-duration="200ms"
                  data-aos-delay="300"
                >
                  Where every click becomes a cinematic journey. Welcome to
                  STRIX Services, where your screen comes to life with endless
                  stories waiting to unfold.
                </p>
                <button
                  className="btn-watch d-flex justify-content-center align-items-center t-4 p-2 px-2 fw-bold fs-5 btn btn-outline-danger mt-5"
                  style={{
                    height: "4.5rem",
                    width: "12.5rem",
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
        <div className="container mt-5">
          <div className="benefits-container container">
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
              Benefits of wacthing in MovieStrix gives you Entertainment.
            </p>
          </div>

          <Swiper
            className="container mt-0 mb-5 p-3 "
            breakpoints={breakpoints}
            w-100
            grabCursor={true}
            data-aos="zoom-in"
            data-aos-duration="800"
            data-aos-delay="500"
          >
            <div className="row py-4">
              <SwiperSlide className="a-cards" style={{ width: "100%" }}>
                <div className="card p-3">
                  <div className="card-body">
                    <div className="card-wrap">
                      <div className="d-flex justify-content-center">
                        <div className="card-svg bg-secondary rounded-circle d-flex justify-content-center align-items-center mb-4">
                          <img src={ads} alt="" width={"50px"} />
                        </div>
                      </div>
                      <p className="card-title text-center  fs-5 fw-medium">
                        No ads
                      </p>
                      <p className="card-text text-center mb-1">
                        Enjoy uninterrupted viewing without any interruptions
                        from annoying advertisements or intrusive commercials,
                        allowing you to fully immerse yourself in the content.
                        just for you and your family
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="a-cards" style={{ width: "100%" }}>
                <div className="card p-3">
                  <div className="card-body">
                    <div className="card-wrap"></div>
                    <div className="d-flex justify-content-center">
                      <div className="card-svg bg-secondary rounded-circle d-flex justify-content-center align-items-center mb-4 ">
                        <img src={Mobile} alt="" width={"50px"} />
                      </div>
                    </div>
                    <p className="card-title text-center  fs-5 fw-medium">
                      Convenient streaming.
                    </p>
                    <p className="card-text text-center p-1 mb-3">
                      Enjoy seamless access to your favorite movies and TV shows
                      on any device, anytime, anywhere, ensuring entertainment
                      at your fingertips with ease.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="a-cards" style={{ width: "100%" }}>
                <div className="card p-3">
                  <div className="card-body">
                    <div className="d-flex justify-content-center">
                      <div className="card-svg bg-secondary rounded-circle d-flex justify-content-center align-items-center mb-4">
                        <img src={interest} alt="" width={"50px"} />
                      </div>
                    </div>
                    <p className="card-title text-center  fs-5 fw-medium">
                      Exclusive original content
                    </p>
                    <p className="card-text text-center ">
                      Witness evolution of storytelling with original content
                      that pioneers new formats, technologies, and narrative
                      techniques, driving innovation in the industry.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="a-cards" style={{ width: "100%" }}>
                <div className="card p-3 ">
                  <div className="card-body ">
                    <div className="d-flex justify-content-center">
                      <div className="card-svg bg-secondary rounded-circle d-flex justify-content-center align-items-center mb-4">
                        <img src={manage} alt="" width={"50px"} />
                      </div>
                    </div>
                    <p className="card-title text-center fs-5 fw-medium">
                      Diverse selection of movies and TV shows.
                    </p>
                    <p className="card-text text-center">
                      Gain a deeper understanding of diverse experiences and
                      perspectives through compelling storytelling, fostering
                      empathy and connection.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="a-cards" style={{ width: "100%" }}>
                <div className="card p-3 ">
                  <div className="card-body ">
                    <div className="d-flex justify-content-center">
                      <div className="card-svg bg-secondary rounded-circle d-flex justify-content-center align-items-center mb-4">
                        <img src={reccomend} alt="" width={"50px"} />
                      </div>
                    </div>
                    <p className="card-title text-center fs-5 fw-medium">
                      Diverse selection of movies and TV shows.
                    </p>
                    <p className="card-text text-center">
                      Gain a deeper understanding of diverse experiences and
                      perspectives through compelling storytelling, fostering
                      empathy and connection.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
        </div>

        {/* FAQ SECTION */}
        <div className="FAQ container d-flex flex-column py-5  mb-lg-5  mb-md-4  mb-sm-5">
          <h2 className=" text-light fw-bolder mb-4">
            FREQUENTLY ASKED QUESTIONS
          </h2>
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

        {email && (
          <div className="checkmark-container position-relative text-center">
            <svg
              className="checkmark"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 52 52"
            >
              <circle
                className="checkmark__circle"
                cx="26"
                cy="26"
                r="25"
                fill="none"
              />
              <path
                className="checkmark__check"
                fill="none"
                d="M14.1 27.2l7.1 7.2 16.7-16.8"
              />
            </svg>
            <p className="message text-light">Message Sent!</p>
          </div>
        )}

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
                          className="w-6 h-6 me-1"
                          style={{ width: "25px", height: "30px" }}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                          />
                        </svg>
                        Email
                      </p>
                      <a href="mailto:info@Strix.com" className="text-light">
                        info@STRIX.com
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
                      <p className="text-light">San Andres, Cainta Rizal</p>
                    </div>
                  </div>
                  <div className="map p-3 rounded-4 mb-4 mt-3">
                    <div style={{ width: " 100%" }}>
                      <iframe
                        className="rounded"
                        width="90%"
                        height="400"
                        frameBorder="0"
                        scrolling="no"
                        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=san%20Andres,Cainta%20Rizal+(MovieFlix)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                      >
                        <a href="https://www.gps.ie/">gps systems</a>
                      </iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 bg-body-secondary px-5 py-5 rounded-4 mb-5"
              data-aos="fade-up"
            >
              <h1
                className="mb-4"
                style={{ fontSize: "50px", fontWeight: "800" }}
              >
                Get in Touch
              </h1>
              <form onSubmit={sendEmail} method="POST">
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
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          required
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
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          required
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
                      value={to}
                      onChange={(e) => setTo(e.target.value)}
                      style={{ height: "55px" }}
                      required
                    />
                  </div>
                </div>

                <div className="form-floating mb-3">
                  <p className="mb-2 fs-6  fw-medium text-dark">Message</p>
                  <textarea
                    className="form-control "
                    style={{ height: "150px" }}
                    placeholder="Leave a comment here"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    required
                  ></textarea>
                </div>
                <div className="btnsub d-flex">
                  <button
                    type="submit"
                    className="btn btn-dark fw-semibold fs-5 w-100 py-3"
                    disabled={submitting}
                  >
                    {submitting ? "Sending..." : " Send a Message"}
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
