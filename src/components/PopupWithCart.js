import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart, removeCartItem, minusCartItem, addToCart } from '../store/actions/cart';
import CartItem from './CartItem';

function PopupWithCart({ isOpen, closePopup }) {
  const dispatch = useDispatch();
  const { totalPrice, totalCount, cartItems } = useSelector(({ cart }) => cart);
  
  function handleClosePopup(evt) { // переписать без обращения к DOM 
    if (
      evt.key === 'Escape' ||
      evt.target.classList.contains('popup_opened') ||
      evt.target.classList.contains('popup__exit-button')
    ) {
      closePopup();
    }
  }

  const addedItems = Object.keys(cartItems).map((key) => {
      return cartItems[key].cartItems[0];
  });

/*   // удалить все элементы из корзины
  const onClearCart = () => {
    if (window.confirm('Вы действительно хотите очистить корзину?')) {
      dispatch(clearCart());
    }
  }; */

  const onRemoveItem = (id) => {
    if (window.confirm('Вы действительно хотите удалить?')) {
      dispatch(removeCartItem(id));
    }
  };

  const onPlusItem = (item) => {
   dispatch(addToCart(item));
  };

  const onMinusItem = (item) => {
    dispatch(minusCartItem(item));
  };

  const onClickOrder = () => {
    console.log('ВАШ ЗАКАЗ', cartItems);
  };

  function handleSubmit(evt) {
    evt.preventDefault();
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
              {addedItems.map((item) => (
                <CartItem
                  item={item}
                  key={item.id}
                  price={cartItems[item.id].totalPrice}
                  total={cartItems[item.id].cartItems.length}
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
