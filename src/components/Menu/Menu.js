import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, minusCartItem, setCartItems } from '../../store/actions/cart';
import { setItems } from '../../store/actions/items';
import Accordion from './Accordion';
import Loading from './Loading';
import PopupWithCart from './PopupWithCart';
import PopupWithImage from './PopupWithImage';

function Menu() {
  const dispatch = useDispatch();
  const items = useSelector(({ items }) => items.items);
  const isLoading = useSelector(({ items }) => items.isLoading);
  const [selectedCard, setSelectedCard] = useState(null);
  const [isOpenCart, setOpenCart] = useState(null); // set приставка поправить
  const { totalPrice, totalCount } = useSelector(({ cart }) => cart);

  useEffect(() => {
    dispatch(setItems());
    dispatch(setCartItems());
  }, []);

  const handleClick = (card) => {
    setSelectedCard(card);
  };

  const closePopups = () => {
    setSelectedCard(null);
    setOpenCart(false);
  };

  const handleAddItemToCart = (item) => {
    dispatch(addToCart(item));
  };

  const handleRemoveItemFromCart = (item) => {
    dispatch(minusCartItem(item));
  };

  const handleOpenCart = () => {
    setOpenCart(true);
  };

  return (
    <section className="main">
      <div className="menu">
        <div className="menu__cart-container">
          <button className="menu__cart-button" type="button" onClick={handleOpenCart}></button>
          <div className="menu__cart-text">
            <p className="menu__cart-heading">
              {totalCount ? `Позиций в корзине ${totalCount}` : 'В корзине нет товаров'}
            </p>
            <p className="menu__cart-subheading">{totalCount ? `К оплате ${totalPrice} рублей` : ''}</p>
          </div>
        </div>

        {isLoading ? (
          <Loading />
        ) : (
          <div className="menu__accordion">
            <Accordion
              title={'Горячие блюда'}
              cards={items?.filter((item) => item.category === 'HotDishes')}
              onCardClick={handleClick}
              addToCart={handleAddItemToCart}
              removeFromCart={handleRemoveItemFromCart}
            />

            <Accordion
              title={'Супы'}
              cards={items?.filter((item) => item.category === 'Soup')}
              onCardClick={handleClick}
              addToCart={handleAddItemToCart}
              removeFromCart={handleRemoveItemFromCart}
            />
          </div>
        )}
      </div>

      <PopupWithImage card={selectedCard} closePopup={closePopups} />
      <PopupWithCart isOpen={isOpenCart} closePopup={closePopups} />
    </section>
  );
}

export default Menu;
