import React from 'react';

function Card({ onCardClick, card }) {
  const { description, price, title, weight, image } = card;

  function handleClick() {
    onCardClick(card);
  }

  return (
    <article className="menu__item">
        <p className="menu__item_title">{title}</p>
      <img src={image} alt={title} onClick={handleClick} className="menu__item_image" />
      <div className="menu__item_content">
      <button className='menu__cart-button'>В корзину</button>
        <div className="menu__item_total">
          <p className="menu__item_price">
            <span className="price_rub">{price}</span>P
          </p>
          <p className="menu__item_weight">
            / <span className="weight_gr">{weight}</span>гр
          </p>
        </div>
      </div>

    </article>
  );
}

export default Card;
