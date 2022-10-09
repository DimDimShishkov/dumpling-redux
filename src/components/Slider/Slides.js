import React, { useContext } from 'react';
import { SliderContext } from './Slider';

export default function Slides() {
  const { slides } = useContext(SliderContext);

  return (
    <div className="slider__slides">
      {slides.map((slide) => (
        <div className="slider__slide" key={slide.id}>
          <img src={slide.image} alt={slide.alt} className="slider__image" />
          <p className="slider__title">{slide.description}</p>
        </div>
      ))}
    </div>
  );
}
