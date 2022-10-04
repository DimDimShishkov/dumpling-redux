import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart, removeCartItem, plusCartItem, minusCartItem } from '../store/actions/cart';
import CartItem from './CartItem';

function PopupWithCart({ isOpen, closePopup, handleAddItemToCart }) {
  const dispatch = useDispatch();
  const { totalPrice, totalCount, items } = useSelector(({ cart }) => cart);
  const [buttonsCondition, setEnabled] = useState(false);

  useEffect(() => {}, [items]);

  function handleClosePopup(evt) {
    if (
      evt.key === 'Escape' ||
      evt.target.classList.contains('popup_opened') ||
      evt.target.classList.contains('popup__exit-button')
    ) {
      closePopup();
    }
  }

  const addedPizzas = Object.keys(items).map((key) => {
    return items[key].items[0];
  });

  const onClearCart = () => {
    if (window.confirm('Вы действительно хотите очистить корзину?')) {
      dispatch(clearCart());
    }
  };

  const onRemoveItem = (id) => {
    if (window.confirm('Вы действительно хотите удалить?')) {
      dispatch(removeCartItem(id));
    }
  };

  const onPlusItem = (item) => {
    handleAddItemToCart(item)
   // dispatch(plusCartItem(item));
  };

  const onMinusItem = (item) => {
    dispatch(minusCartItem(item));
  };

  const onClickOrder = () => {
    console.log('ВАШ ЗАКАЗ', items);
  };

  function handleSubmit(evt) {
    evt.preventDefault();
    console.log(addedPizzas);
    addedPizzas.map((item) => console.log(item));
  }
  /*   function handleTotal(itemID) {
    return props.cards.filter((i) => i._id == itemID).length;
  } */
  return (
    <div className={`popup ${isOpen && 'popup_opened'}`} onClick={handleClosePopup}>
      <div className="popup__container">
        <h2 className="popup__title">Корзина</h2>
        {!totalPrice ? (
          <>
            <div className="popup__empty-image"></div>
            <p className="popup__empty-text">В корзине ничего нет</p>
          </>
        ) : (
          <>
            {' '}
            <ul className="popup__items">
              {addedPizzas.map((item) => (
                <CartItem
                  item={item}
                  key={item.id}
                  price={items[item.id].totalPrice}
                  total={items[item.id].items.length}
                  removeItem={onRemoveItem}
                  plusItem={onPlusItem}
                  minusItem={onMinusItem}
                />
              ))}
            </ul>
            <form className="popup__form" onSubmit={handleSubmit}>
              <p className="popup__form-text">Позиций в корзине: {totalCount} шт.</p>
              <p className="popup__form-text">К оплате: {totalPrice} р.</p>
              <button
                type="submit"
                disabled={!totalPrice}
                className={`popup__submit-button ${!totalPrice && 'popup__submit-button_type_disabled'}`}
              >
                Оформить заказ
              </button>
            </form>{' '}
          </>
        )}
        <button className="popup__exit-button" type="button" onClick={handleClosePopup}></button>
      </div>
    </div>
  );
}

export default PopupWithCart;
