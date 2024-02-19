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
          <div
            className="text-containers  text-light d-flex flex-wrap "
            style={{ width: "500px" }}
          >
            <div className="container" data-aos="zoom-in-up">
              <h1 className="title mb-4" data-aos="zoom-in">
                {selectedSeries.title.replace(/-/g, " ")}
              </h1>
              <div className="desc">
                <div className="d-flex flex-wrap fw-medium ">
                  <p className="ms-2 mb-1">{selectedSeries.date}</p>
                  <span className="ms-2 me-1">|</span>
                  <p className="ms-1 mb-1">{selectedSeries.age}</p>
                  <span className="ms-2 me-1">|</span>
                  <p className="ms-1 mb-1">{selectedSeries.genre}</p>
                </div>
              </div>
              <div className="dec-section">
                <p className="desc-p mt-2 fs-6">{selectedSeries.desc}</p>
              </div>
              <div className="cast fs-6 fw-lighter mt-2">
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
