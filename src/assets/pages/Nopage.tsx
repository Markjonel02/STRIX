import React from "react";
import videoSource from "../img/404vid.mp4"; // Update the path to your video file
const styles: React.CSSProperties = {
  position: "absolute",
  display: "flex",
  top: "65%",
  left: "50%",
  transform: "translateX(-50%)", // Corrected transform property
  zIndex: 1,
};

const MyVideoComponent: React.FC = () => {
  return (
    <div className=" position-relative w-100">
      <video
        className="mt-5"
        src={videoSource}
        autoPlay
        muted
        loop
        height="360"
        style={{ maxWidth: "100%", height: "auto" }}
      />

      <div className="button" style={styles}>
        <div className="button-borders">
          <button className="primary-button bg-transparent rounded">
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyVideoComponent;
