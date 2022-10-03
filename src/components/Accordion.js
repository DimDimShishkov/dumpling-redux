import React, { useState } from 'react';
import Card from './Card';

function Accordion(title, cards, addToCart, onCardClick, load) {
  const [isOpenAccordion, setOpenAccordion] = useState(null);
  return (
    <div className='menu__accordion-item'>
      <div className="menu__accordion-head" onClick={() => setOpenAccordion(!isOpenAccordion)}>
        <h2 className="menu__accordion-title">{title.title}</h2>
        <div
          className={`menu__accordion-button ${isOpenAccordion && 'menu__accordion-button_active'}`}
        ></div>
      </div>
      <div className="menu__accordion-content">
        {load && cards.map((card) => <Card card={card} key={card.id} addToCart={addToCart} onCardClick={onCardClick}/>)}
      </div>
    </div>
  );
}

export default Accordion;
