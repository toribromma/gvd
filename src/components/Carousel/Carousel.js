import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import image1 from "../../images/1.jpg";
import image2 from "../../images/2.jpg";
import image3 from "../../images/3.jpg";
import { StyledCarousel } from "./Carousel.styled";

const MyCarousel = () => {
  return (
    <StyledCarousel>
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showArrows={false}
      >
        <div>
          <img alt={image1} src={image1} />
        </div>
        <div>
          <img alt={image2} src={image2} />
        </div>
        <div>
          <img alt={image3} src={image3} />
        </div>
      </Carousel>
    </StyledCarousel>
  );
};

export default MyCarousel;
