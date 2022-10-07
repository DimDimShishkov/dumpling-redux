import React, { useState, createContext } from 'react';
import Slide from './Slide';
import Dot from './Dot';
import Arrows from './Arrows'

export const SliderContext = createContext();


function Slider ({ title, cards, addToCart, onCardClick, removeFromCart }) {
  const [items, setItems] = useState([]);
  const [slide, setSlide] = useState(0);
  const [touchPosition, setTouchPosition] = useState(null)



  return (

    <></>
  );
}

export default Slider ;
