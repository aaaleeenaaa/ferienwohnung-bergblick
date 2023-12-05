import React, { useState } from "react";
import Image from "next/image";
import styled from "styled-components";

const images = [
  { src: "/Wohnzimmer-2.jpeg", width: 700, height: 393 },
  { src: "/Schlafzimmer-2.jpeg", width: 700, height: 393 },
  { src: "/Schlafzimmer.jpeg", width: 300, height: 533 },
  { src: "/Küche.jpeg", width: 300, height: 533 },
  { src: "/Bad-2.jpeg", width: 700, height: 393 },
  { src: "/Bad.jpeg", width: 300, height: 533 },
  { src: "/Dusche.jpeg", width: 300, height: 533 },
  { src: "/Garten.jpeg", width: 700, height: 393 },
  { src: "/Terrasse.jpeg", width: 700, height: 393 },
  { src: "/Terrasse-2.jpeg", width: 700, height: 393 },
  { src: "/Terrasse-3.jpeg", width: 700, height: 393 },
  { src: "/Sauna.jpeg", width: 700, height: 393 },
];

const StyledSlideshow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
`;

const ArrowButton = styled.button`
  background: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
  position: fixed;
  top: calc(50% - 20px);
`;

const PrevButton = styled(ArrowButton)`
  left: 20%;
`;

const NextButton = styled(ArrowButton)`
  right: 20%;
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
      <PrevButton onClick={goToPrevious}>&larr;</PrevButton>
      <Image
        src={images[currentIndex].src}
        alt={`Slide ${currentIndex + 1}`}
        width={images[currentIndex].width}
        height={images[currentIndex].height}
      />
      <NextButton onClick={goToNext}>&rarr;</NextButton>
    </StyledSlideshow>
  );
};

export default Slideshow;
