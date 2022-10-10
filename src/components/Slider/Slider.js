import React, { createContext, useEffect, useState } from 'react';
import { api } from '../../utils/api';
import Arrows from './Arrows';
import Dots from './Dots';
import Slides from './Slides';

export const SliderContext = createContext();

function Slider() {
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

  useEffect(() => {
    const interval = setInterval(() => {
      changeSlide(1);
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, [slides.length, slide]);

  return (
    <SliderContext.Provider value={{ slides, goToSlide, slidesCount: slides.length, slideNumber: slide, changeSlide }}>
      <section className="slider">
        <div className="slider__texts">
          <h2 className="slider__text">
            Кафе Хинкальная расположилось в тихом зеленом районе недалеко от центра города.
          </h2>
          <h2 className="slider__text">В интерьере кафе удачно сочетается изысканная роскошь и домашний уют.</h2>
          <h2 className="slider__text">
            Основой меню в кафе является знаменитая грузинская кухня: обязательно стоит попробовать разнообразные
            хачапури из собственной пекарни и шашлыки, приготовленные на мангале истинными мастерами своего дела.
          </h2>
        </div>
        <Slides />
        <Arrows />
        <Dots />
      </section>
    </SliderContext.Provider>
  );
}

export default Slider;
