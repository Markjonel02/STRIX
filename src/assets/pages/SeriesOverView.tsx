import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Data, { ImageData } from "../data/Data"; // Import ImageData type

const SeriesOverview = () => {
  const { title, index } = useParams<{
    title: string;
    index: string;
  }>();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [selectedSeries, setSelectedSeries] = useState<ImageData | undefined>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const images = Data();
        if (!title || !index || isNaN(parseInt(index)) || !images) {
          setError(true);
          setLoading(false);
          return;
        }

        const parsedIndex = parseInt(index);

        let seriesArray: ImageData[] | undefined;

        if (images.series && title in images.series) {
          seriesArray = images.series; // Use the "series" array for both series and Kdramadb
        } else if (images.Kdramadb && title in images.Kdramadb) {
          seriesArray = images.Kdramadb;
        }

        if (seriesArray && parsedIndex < seriesArray.length) {
          // Check if parsedIndex is within the range of seriesArray
          const series = seriesArray[parsedIndex]; // Use parsedIndex directly to access the array
          setSelectedSeries(series);
        } else {
          setError(true);
        }
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [title, index]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !selectedSeries) {
    return <div>Error: Series not found</div>;
  }

  return (
    <div className="bgs container-fluid bg-light">
      <>
        <h2>{selectedSeries.title}</h2>
        <img src={selectedSeries.imageUrl} alt={selectedSeries.title} />
        <p>{selectedSeries.genre}</p>
      </>
    </div>
  );
};

export default SeriesOverview;
