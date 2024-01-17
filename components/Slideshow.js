import React, { useState, useEffect } from "react";
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

// Calculate aspect ratio for each image
images.forEach((image) => {
  image.aspectRatio = image.width / image.height;
});

const StyledSlideshow = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  position: relative;
  width: 80%;
  height: 75vh;
  padding: 20px; /* Adjust the padding to control the frame size */

  @media (max-width: 768px) {
    width: 100%; /* Full width for mobile */
    height: auto; /* Auto height for mobile */
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 0;
    padding-bottom: ${(props) => (1 / props.aspectRatio) * 100}%;
    margin-bottom: 10px; /* Add your desired padding between images */

    > div {
      position: absolute !important;
      top: 0;
      left: 0;
      width: 100% !important;
      height: 100% !important;
    }

    img {
      width: 100%; /* Ensure landscape images take up full width */
      height: auto;
    }
  }
`;

const ImageList = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    flex-direction: column-reverse; /* Reverse order for mobile view */
  }
`;

const ArrowButton = styled.button`
  background: transparent;
  border: none;
  font-size: 3rem; /* Adjust font size for mobile */
  cursor: pointer;
  position: absolute;
  top: 30%; /* Adjust the position of the arrow buttons for mobile */
  transform: translateY(-50%);
`;

const PrevButton = styled(ArrowButton)`
  left: 10px; /* Adjust the position of the previous button */
`;

const NextButton = styled(ArrowButton)`
  right: 10px; /* Adjust the position of the next button */
`;

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    handleResize(); // Initial check on mount

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
      {!isMobileView && <PrevButton onClick={goToPrevious}>&larr;</PrevButton>}
      {isMobileView ? (
        <ImageList>
          {images.map((image, index) => (
            <ImageContainer key={index} aspectRatio={image.aspectRatio}>
              <Image
                src={image.src}
                alt={`Slide ${index + 1}`}
                width={image.width}
                height={image.height}
              />
            </ImageContainer>
          ))}
        </ImageList>
      ) : (
        images.map((image, index) => (
          <ImageContainer
            key={index}
            aspectRatio={image.aspectRatio}
            style={{ display: index === currentIndex ? "block" : "none" }}
          >
            <Image
              src={image.src}
              alt={`Slide ${index + 1}`}
              width={image.width}
              height={image.height}
            />
          </ImageContainer>
        ))
      )}
      {!isMobileView && <NextButton onClick={goToNext}>&rarr;</NextButton>}
    </StyledSlideshow>
  );
};

export default Slideshow;
