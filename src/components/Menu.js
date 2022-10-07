import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
  const isLoading = useSelector(({ items }) => items.isLoading);
  /*  const cartItems = useSelector(({ cart }) => cart.items); */
  const [selectedCard, setSelectedCard] = useState(null);
  const [isOpenCart, setOpenCart] = useState(null); // set приставка поправить
  const { totalPrice, totalCount } = useSelector(({ cart }) => cart);

  /*   useEffect(() => {
    api
      .handleDownloadAll()
      .then((res) => {
        dispatch(setItems(res)); // переделать компонент в глупый 
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  }, []); */

  useEffect(() => {
    dispatch(setItems());
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
      <PopupWithCart isOpen={isOpenCart} closePopup={closePopups} handleAddItemToCart={handleAddItemToCart} />
    </section>
  );
}

export default Menu;
