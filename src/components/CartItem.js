import React from 'react';

function CartItem({ item, removeItem, plusItem, minusItem, price, total }) {
  const handleRemoveItem = (id) => {
    removeItem(id)
  };

  const handlePlusItem = (item) => {
    plusItem(item)
  };

  const handleMinusItem = (item) => {
    minusItem(item);
  };

  return (
    <li key={item._id} className="popup__card-item">
      <img className="popup__card-image" src={item.image} alt={item.title}></img>
      <div className="popup__card-text">
        <h3 className="popup__card-heading">{item.title}</h3>
        <p className="popup__card-subheading">{price}p /{item.weight}гр</p>
      </div>
      <div className="popup__card-total">
        <button className='popup__card-button' onClick={() => minusItem(item)}>-</button>
        <p className="popup__card-heading">{total}</p>
        <button className='popup__card-button' onClick={() => plusItem(item)}>+</button>
      </div>
    </li>
  );
}

export default CartItem;
