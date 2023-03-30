import { useState } from "react";

import "../css pages/Carousel.css";

const images = [
  {
    id: 1,
    src: "https://cdn-icons-png.flaticon.com/512/3322/3322854.png",
    alt: "Slide 1",
  },
  {
    id: 2,
    src: "https://cdn-icons-png.flaticon.com/512/2017/2017316.png",
    alt: "Slide 2",
  },
  {
    id: 3,
    src: "https://cdn-icons-png.flaticon.com/512/1830/1830767.png",
    alt: "Slide 3",
  },
  {
    id: 4,
    src: "https://cdn-icons-png.flaticon.com/512/2946/2946701.png",
    alt: "Slide 4",
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const handlePrev = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="carousel">
      <div className="slides">
        {images.map((image, index) => (
          <img
            key={image.id}
            src={image.src}
            alt={image.alt}
            className={`slide ${index === currentIndex ? "active" : ""}`}
          />
        ))}
      </div>
      <button className="prev" onClick={handlePrev}>
        &#10094;
      </button>
      <button className="next" onClick={handleNext}>
        &#x276F;
      </button>
    </div>
  );
};

export default Carousel;
