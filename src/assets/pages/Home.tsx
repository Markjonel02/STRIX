import "react-lazy-load-image-component/src/effects/blur.css";


import { Discover } from "./Discover";
const Home = () => {
  return (
    <>
      <div
        className="disc-section "
        style={{ width: "300px", height: "300px" }}
      >
        <Discover />
      </div>
    </>
  );
};

export default Home;
