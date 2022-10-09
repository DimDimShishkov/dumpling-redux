import React from 'react';
import { useSelector } from 'react-redux';

function Card({ onCardClick, card, addToCart, removeFromCart }) {
  const { cartItems } = useSelector(({ cart }) => cart);
  const { price, title, weight, image } = card;

  function handleClick() {
    onCardClick(card);
  }

  function handleToCart() {
    addToCart(card);
  }

  function handleFromCart() {
    removeFromCart(card);
  }
  const thisCard = cartItems.find((el) => el.id === card.id).total;
  let orderButton;

  if (thisCard) {
    orderButton = (
      <div className="popup__card-total">
        <button className="popup__card-button" onClick={handleFromCart}>
          -
        </button>
        <p className="popup__card-heading">{thisCard}</p>
        <button className="popup__card-button" onClick={handleToCart}>
          +
        </button>
      </div>
    );
  } else {
    orderButton = (
      <button className="card__cart-button" onClick={handleToCart}>
        В корзину
      </button>
    );
  }

  return (
    <article className="card">
      <p className="card__title">{title}</p>
      <img src={image} alt={title} onClick={handleClick} className="card__image" />
      <div className="card__content">
        <div className="card__total">
          <p className="card__price">{price}Р</p>
          <p className="card__weight">/{weight}гр</p>
        </div>
        {orderButton}
      </div>
    </article>
  );
}

export default Card;
