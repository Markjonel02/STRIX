import Header from "./assets/components/Header";
import Maincontainer from "./assets/components/Maincontainer";
import { Routes, Route } from "react-router-dom";

import { useEffect, Suspense, lazy } from "react";
// Animation on Scroll
import Aos from "aos";
import "aos/dist/aos.css";
//routes
const Homes = lazy(() => import("./assets/pages/Home"));
const Movies = lazy(() => import("./assets/pages/Movies"));
const Series = lazy(() => import("./assets/pages/Series"));
const About = lazy(() => import("./assets/pages/About"));
const Nopage = lazy(() => import("./assets/pages/Nopage"));

const App = () => {
  useEffect(() => {
    Aos.init();
  });

  return (
    <>
      <div className="heading">
        <Header />
      </div>
      <div className="main-container w-100 vh-100" data-aos="fade-right">
        <Suspense fallback={<div>Loading....</div>}>
          <Maincontainer>
            <Routes>
              <Route path="/" index element={<Homes />} />
              <Route path="movies" element={<Movies />} />
              <Route path="series" element={<Series />} />
              <Route path="about" element={<About />} />
              <Route path="*" element={<Nopage />} />
            </Routes>
          </Maincontainer>
        </Suspense>
      </div>
    </>
  );
};

export default App;
