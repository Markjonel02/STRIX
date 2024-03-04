// MovieSlide.tsx
import React from "react";
import { SwiperSlide } from "swiper/react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

interface MovieSlideProps {
  imageUrl: string;
  alt: string;
  title: string;
  description: string;
}

const truncateDescription = (description: string, sentenceLimit: number) => {
  const sentences = description.split(".").filter(Boolean);
  const truncatedSentences = sentences.slice(0, sentenceLimit);
  return truncatedSentences.join(". ") + ".";
};

const MovieSlide: React.FC<MovieSlideProps> = ({
  imageUrl,
  alt,
  title,
  description,
}) => {
  const truncatedDescription = truncateDescription(description, 3);

  return (
    <SwiperSlide>
      <div className="swiper-image-container">
        <LazyLoadImage
          src={imageUrl}
          alt={alt}
          effect="blur"
          width="100%"
          height="auto"
          loading="lazy"
        />
        <div className="image-overlay "></div>
        <div className="head-banner d-xl-flex flex-xl-column">
          <strong>
            <h1
              className="fw-bolder"
              style={{
                fontSize: "3em",
              }}
            >
              {title}
            </h1>
          </strong>
          <span
            className="d-block fw-light fs-5 "
            style={{
              whiteSpace: "pre-line",
              textAlign: "left",
            }}
          >
            {truncatedDescription}
          </span>
        </div>
      </div>
    </SwiperSlide>
  );
};

export default MovieSlide;
