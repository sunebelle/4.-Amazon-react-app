import React, { useState } from "react";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpg";
import { Carousel, CarouselItem, CarouselControl } from "reactstrap";
import "./CarouselHome.css";

const items = [
  {
    src: img1,
    altText: "Slide 1",
  },
  {
    src: img2,
    altText: "Slide 2",
  },
  {
    src: img3,
    altText: "Slide 3",
  },
  {
    src: img4,
    altText: "Slide 4",
  },
  {
    src: img5,
    altText: "Slide 5",
  },
];

const CarouselHome = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img className="carousel__img " src={item.src} alt={item.altText} />
      </CarouselItem>
    );
  });

  return (
    <div className="carousel__home">
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        interval={false}
      >
        {slides}
      </Carousel>
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </div>
  );
};

export default CarouselHome;
