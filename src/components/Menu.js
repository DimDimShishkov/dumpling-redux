import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { api } from './api';
import Card from './Card';
import Loading from './Loading';
import { setItems } from '../store/actions/items';
import { addToCart, minusCartItem } from '../store/actions/cart';
import Accordion from './Accordion';
import PopupWithImage from './PopupWithImage';
import PopupWithCart from './PopupWithCart';

function Menu() {
  const dispatch = useDispatch();
  // const [HotDishes, setHotDishes] = useState(null);
  const items = useSelector(({ items }) => items.items);
  /*  const cartItems = useSelector(({ cart }) => cart.items); */
  const [isOpenAccordion, setOpenAccordion] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedCard, setSelectedCard] = useState(null);
  const [isOpenCart, setOpenCart] = useState(null);
  const { totalPrice, totalCount } = useSelector(({ cart }) => cart);

  useEffect(() => {
    api
      .handleDownloadAll()
      .then((res) => {
        dispatch(setItems(res));
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
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
        <div className="menu__cart-container" onClick={handleOpenCart}>
          <button className="menu__cart-button" type="button"></button>
          <div className="menu__cart-text">
            <p className="menu__cart-heading">{items ? `Позиций в корзине ${totalCount}` : 'В корзине нет картинок'}</p>
            <p className="menu__cart-subheading">{items ? `К оплате ${totalPrice} рублей` : ''}</p>
          </div>
        </div>
        {loading ? (
          <Loading />
        ) : (
          <div className="menu__accordion">
            <Accordion
              title={'Горячие блюда'}
              cards={items[0] && items[0].HotDishes}
              addToCart={addToCart}
              onCardClick={handleClick}
              load={items[0]}
            />
            <Accordion title={'Супы'} cards={items} addToCart={addToCart} onCardClick={handleClick} load={items[0]} />
            <div className="menu__accordion-item">
              <div className="menu__accordion-head" onClick={() => setOpenAccordion(!isOpenAccordion)}>
                <h2 className="menu__accordion-title">test</h2>
                <div className={`menu__accordion-button ${isOpenAccordion && 'menu__accordion-button_active'}`}></div>
              </div>
              <div className={`menu__accordion-content ${isOpenAccordion && 'menu__accordion-content_active'}`}>
                {items[0] &&
                  items[0].HotDishes.map((card) => (
                    <Card
                      card={card}
                      key={card.id}
                      onCardClick={handleClick}
                      addToCart={handleAddItemToCart}
                      removeFromCart={handleRemoveItemFromCart}
                    />
                  ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <PopupWithImage card={selectedCard} closePopup={closePopups} />
      <PopupWithCart isOpen={isOpenCart} closePopup={closePopups} handleAddItemToCart={handleAddItemToCart} />
    </section>
  );
}

export default Menu;
