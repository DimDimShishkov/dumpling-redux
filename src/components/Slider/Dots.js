import React, { useContext } from "react";
import { SliderContext } from "./Slider";

export default function Dots() {
  const { goToSlide, slideNumber, slidesCount } = useContext(SliderContext);

  const renderDots = () => {
    const dots = [];
    for (let i = 0; i < slidesCount; i++) {
      dots.push(<div key={i}
        className={`slider__dot ${slideNumber === i ? "slider__dot_selected" : ""}`}
        onClick={() => goToSlide(i)}
      />);
    }
    return dots;
  };

  return (
    <div className="slider__dots">
      {renderDots()}
    </div>
  );
}