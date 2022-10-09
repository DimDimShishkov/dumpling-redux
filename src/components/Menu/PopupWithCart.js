import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, minusCartItem, removeCartItem } from '../../store/actions/cart';
import CartItem from './CartItem';

function PopupWithCart({ isOpen, closePopup }) {
  const dispatch = useDispatch();
  const { totalPrice, totalCount, cartItems } = useSelector(({ cart }) => cart);

  useEffect(() => {
    const closeOnEsc = (evt) => {
      if (evt.key === 'Escape') {
        closePopup();
      }
    };
    document.addEventListener('keydown', closeOnEsc);
    return () => {
      document.removeEventListener('keydown', closeOnEsc);
    };
  }, []);

  const onRemoveItem = (item) => {
      dispatch(removeCartItem(item));
  };

  const onPlusItem = (item) => {
    dispatch(addToCart(item));
  };

  const onMinusItem = (item) => {
    dispatch(minusCartItem(item));
  };

  function handleSubmit(evt) {
    evt.preventDefault();
  }

  return (
    <div className={`popup ${isOpen && 'popup_opened'}`} onClick={() => closePopup()}>
      <div className="popup__container" onClick={(e) => e.stopPropagation()}>
        <h2 className="popup__title">Корзина</h2>
        {!totalPrice ? (
          <>
            <div className="popup__empty-image"></div>
            <p className="popup__empty-text">В корзине ничего нет</p>
          </>
        ) : (
          <>
            <ul className="popup__items">
              {cartItems?.map(function (item) {
                if (item.total) {
                  return (
                    <CartItem
                      item={item}
                      key={item.id}
                      price={item.price * item.total}
                      total={item.total}
                      removeItem={onRemoveItem}
                      plusItem={onPlusItem}
                      minusItem={onMinusItem}
                    />
                  );
                }
              })}
            </ul>
            <form className="popup__form" onSubmit={handleSubmit}>
              <p className="popup__form-text">Позиций в корзине: {totalCount} шт.</p>
              <p className="popup__form-text">К оплате: {totalPrice} р.</p>
              <button className={`popup__submit-button`}>Оформить заказ</button>
            </form>
          </>
        )}
        <button className="popup__exit-button" type="button" onClick={() => closePopup()}></button>
      </div>
    </div>
  );
}

export default PopupWithCart;
