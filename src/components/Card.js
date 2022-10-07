import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { minusCartItem, addToCart } from '../store/actions/cart';

function Card({ onCardClick, card, addToCart, removeFromCart }) {
  const { totalPrice, totalCount, cartItems } = useSelector(({ cart }) => cart);
  const { price, title, weight, image } = card;
  const dispatch = useDispatch();

  const plusItem = (item) => {
    dispatch(addToCart(item));
  };

  const minusItem = (item) => {
    dispatch(minusCartItem(item));
  };

  function handleClick() {
    onCardClick(card);
  }

  function handleToCart() {
    addToCart(card);
  }

  function handleFromCart() {
    removeFromCart(card);
  }
  console.log(cartItems[card.id]);

  let orderButton;

  (function buttonsChange() {
    if (cartItems[card.id]) {
      orderButton = (
        <div className="popup__card-total">
          <button className="popup__card-button" onClick={handleFromCart}>
            -
          </button>
          <p className="popup__card-heading">{cartItems[card.id].cartItems.length}</p>
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
  })();

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
