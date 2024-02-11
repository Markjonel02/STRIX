import { useParams } from "react-router-dom";
import Data from "../data/Data";

const SeriesOverview = () => {
  // Extract URL parameters using useParams
  const { title, index = "" } = useParams<{ title: string; index: string }>();

  // Parse index to integer
  const parsedIndex = parseInt(index);

  // Retrieve image data from data source
  const images = Data();

  // Find the selected series or K-drama
  const selectedSeries =
    images.series?.find(
      (img, idx) => img.title === title && idx === parsedIndex
    ) ||
    images.Kdramadb?.find(
      (img, idx) => img.title === title && idx === parsedIndex
    );

  // Display the selected series information if it exists, otherwise display "Invalid Series"
  return (
    <>
      {selectedSeries && (
        <div
          className="image-container position-relative w-100 vh-100"
          style={{ backgroundColor: "#000000ff" }}
        >
          <img
            src={selectedSeries.imageUrl}
            alt={selectedSeries.title}
            className="img-fluid"
            style={{ width: "100%", height: "100%" }}
            data-aos="fade"
            data-aos-duration="1500ms"
            data-aos-delay="100ms"
          />
          <div className="overlay"></div>
          <div className="text-containers  text-light d-flex">
            <div className="" style={{ width: "500px" }} data-aos="zoom-in-up">
              <h1 className="title mb-4" data-aos="zoom-in">
                {selectedSeries.title.replace(/-/g, " ")}
              </h1>
              <div className="desc d-flex ">
                <p className="ms-2">{selectedSeries.date}</p>
                <span className=" ms-2">| </span>
                <p className="ms-2 border px-2 ">{selectedSeries.age}</p>
                <span className="ms-2">| </span>
                <p className="ms-2"> {selectedSeries.genre}</p>
              </div>
              <p className=" ">{selectedSeries.desc}</p>

              <div className="cast">
                <p>
                  <span style={{ color: "#eeee" }}>Starings: </span>
                  {selectedSeries.staring}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SeriesOverview;
