import React, { useState } from 'react';
import Card from './Card';

function Accordion({ title, cards, addToCart, onCardClick, removeFromCart }) {
  const [isOpenAccordion, setOpenAccordion] = useState(false);

  return (
    <div className="menu__accordion-item">
      <div className="menu__accordion-head" onClick={() => setOpenAccordion(!isOpenAccordion)}>
        <h2 className="menu__accordion-title">{title}</h2>
        <div className={`menu__accordion-button ${isOpenAccordion && 'menu__accordion-button_active'}`}></div>
      </div>
      {isOpenAccordion && (
        <div
          className={`menu__accordion-content 
              ${'menu__accordion-content_active'}`}
        >
          {cards?.map((card) => {
            return (
              <Card
                card={card}
                key={card.id}
                addToCart={addToCart}
                onCardClick={onCardClick}
                removeFromCart={removeFromCart}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Accordion;
