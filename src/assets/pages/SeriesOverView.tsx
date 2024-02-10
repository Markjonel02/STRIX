import React from "react";
import chucky from "../img/seriesimg/chucky-series-wallpapers.jpg";
const bg: React.CSSProperties = {
  backgroundImage: `url(${chucky})`,
};
const SeriesOverView = () => {
  return (
    <div className="bgs container-fluid bg-light" style={bg}>
      <div className="container-bg">HAHAH</div>
      <div className="textbg-container"></div>
    </div>
  );
};

export default SeriesOverView;
