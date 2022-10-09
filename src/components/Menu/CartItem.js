import React from 'react';

function CartItem({ item, removeItem, plusItem, minusItem, price, total }) {

  return (
    <li key={item._id} className="popup__card-item">
      <div className="popup__card-pic">
      <button className="popup__card-remove" type="button" onClick={() => removeItem(item)}></button>
      <img className="popup__card-image" src={item.image} alt={item.title}></img>
      </div>
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
