import { Header } from "./assets/components/Header";
import { Maincontainer } from "./assets/components/Maincontainer";
import { Routes, Route } from "react-router-dom";
//routes
import { Home } from "./assets/pages/Home";
import { Movies } from "./assets/pages/Movies";
import { Nopage } from "./assets/pages/Nopage";
import { Series } from "./assets/pages/Series";
import { About } from "./assets/pages/About";

const App = () => {
  return (
    <>
      <div className="cotainer">
        <div className="heading">
          <Header />
        </div>

        <div className="main-container p-0 m-0 vh-100">
          <Maincontainer>
            <Routes>
              <Route index element={<Home />} />
              <Route path="movies" element={<Movies />} />
              <Route path="series" element={<Series />} />
              <Route path="about" element={<About />} />
              <Route path="*" element={<Nopage />} />
            </Routes>
          </Maincontainer>
        </div>
      </div>
    </>
  );
};

export default App;
