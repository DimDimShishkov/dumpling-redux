import React from 'react';

export default function PopupWithImage({card, closePopup}) {
  function handleClosePopup(evt) {
    if (evt.key === 'Escape' ||
    evt.target.classList.contains('popup_opened') ||
    evt.target.classList.contains('popup__exit-button')) {
      closePopup()
    }
  }

  return (
    <div className={`popup ${card && 'popup_opened'}`} onClick={handleClosePopup}>
      <div className="popup__looking">
        <img
          src={card?.image}
          alt={card?.title}
          className="popup__image"
        />
        <button className="popup__exit-button" type="button" onClick={handleClosePopup}></button>
        <h2 className="popup__description">{card?.description}</h2>
      </div>
    </div>
  );
}