import React from "react";
import videoSource from "../img/404vid.mp4"; // Update the path to your video file

const MyVideoComponent: React.FC = () => {
  return (
    <div>
      <video
        src={videoSource}
        autoPlay
        muted
        loop
        height="360"
        style={{ maxWidth: "100%", height: "auto" }}
      />
    </div>
  );
};

export default MyVideoComponent;
