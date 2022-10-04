import React from 'react';

function Card({ onCardClick, card, addToCart }) {
  const { price, title, weight, image } = card;

  function handleClick() {
    onCardClick(card);
  }

  function handleToCart() {
    addToCart(card);
  }

  return (
    <article className="card">
      <p className="card__title">{title}</p>
      <img src={image} alt={title} onClick={handleClick} className="card__image" />
      <div className="card__content">
        <button className="card__cart-button" onClick={handleToCart}>В корзину</button>
        <div className="card__total">
          <p className="card__price">{price}Р</p>
          <p className="card__weight">/{weight}гр</p>
        </div>
      </div>
    </article>
  );
}

export default Card;
