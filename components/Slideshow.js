import React, { useState } from "react";
import Image from "next/image";
import styled from "styled-components";

const images = [
  { src: "/Wohnzimmer-2.jpeg", width: 800, height: 600 },
  { src: "/Schlafzimmer-2.jpeg", width: 800, height: 600 },
  { src: "/Schlafzimmer.jpeg", width: 800, height: 600 },
  { src: "/Küche.jpeg", width: 800, height: 600 },
  { src: "/Bad-2.jpeg", width: 800, height: 600 },
  { src: "/Bad.jpeg", width: 800, height: 600 },
  { src: "/Dusche.jpeg", width: 800, height: 600 },
  { src: "/Garten.jpeg", width: 800, height: 600 },
  { src: "/Terrasse.jpeg", width: 800, height: 600 },
  { src: "/Terrasse-2.jpeg", width: 800, height: 600 },
  { src: "/Terrasse-3.jpeg", width: 800, height: 600 },
  { src: "/Sauna.jpeg", width: 800, height: 600 },
];

const StyledSlideshow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  text-align: center;
`;

const ArrowButton = styled.button`
  background: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <StyledSlideshow>
      <ArrowButton onClick={goToPrevious}>&larr;</ArrowButton>
      <Image
        src={images[currentIndex].src}
        alt={`Slide ${currentIndex + 1}`}
        width={images[currentIndex].width}
        height={images[currentIndex].height}
      />
      <ArrowButton onClick={goToNext}>&rarr;</ArrowButton>
    </StyledSlideshow>
  );
};

export default Slideshow;
