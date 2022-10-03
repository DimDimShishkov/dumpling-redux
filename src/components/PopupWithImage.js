import React, { useEffect, useState } from 'react';

export default function PopupWithImage(card, closePopup) {

  function handleClosePopup(evt) {
    if (evt.key === 'Escape' ||
    evt.target.classList.contains('popup_opened') ||
    evt.target.classList.contains('popup__exit-button')) {
      closePopup()
    }
    console.log(card.card)
  }

  return (
    <div className={`popup ${card && 'popup_opened'}`} onClick={handleClosePopup}>
      <div className="popup__looking">
        <img
          src={card.card?.image}
          alt={card.card?.title}
          className="popup__image"
        />
        <button className="popup__exit-button" type="button" onClick={handleClosePopup}></button>
        <h2 className="popup__description">{card?.name}</h2>
      </div>
    </div>
  );
}