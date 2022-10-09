import React, { createContext, useEffect, useState } from 'react';
import { api } from '../../utils/api';
import Slides from './Slides';
import Arrows from './Arrows';

export const SliderContext = createContext();

function Slider({ title, cards, addToCart, onCardClick, removeFromCart }) {
  const [items, setItems] = useState([]);
  const [slide, setSlide] = useState([]);
  const [slides, setSlides] = useState([]);

  // загрузка слайдов с сервера
  useEffect(() => {
    const loadData = async () => {
      const images = await api.downloadSliderFromServer();
      setSlides(images);
    };
    loadData();
  }, []);

  // переход к определенному слайду
  const goToSlide = (number) => {
    setSlide(number % slides.length);
  };
  // переход к следующему / предыдущему слайду
  const changeSlide = (direction = 1) => {
    let slideNumber = 0;
    if (slide + direction < 0) {
      slideNumber = slides.length - 1;
    } else {
      slideNumber = (slide + direction) % slides.length;
    }
    setSlide(slideNumber);
  };

  return (
    <SliderContext.Provider value={{ slides, goToSlide, slidesCount: slides.length, changeSlide }}>
      <section className="slider">
        <Slides />
        <Arrows />
        {/*     
    
    <Dots /> */}
      </section>
    </SliderContext.Provider>
  );
}

export default Slider;
