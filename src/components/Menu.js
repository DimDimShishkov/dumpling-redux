import React, { useEffect, useState } from 'react';
import { api } from './api';
import Card from './Card';

function Menu() {
  const [HotDishes, setHotDishes] = useState(null);

  useEffect(() => {
    api
      .handleDownloadHotDishes()
      .then((res) => {
        setHotDishes(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section className="main">
      <div className="menu">
        <div className="menu__head">
          <h2 className="menu__title">Холодные закуски</h2>
          <button className="menu__button"></button>
          <section className='menu__items'>{HotDishes?.map((card) => (<Card card={card} key={card.id}/>))}</section>
        </div>

        <div className="menu__items"></div>
      </div>
    </section>
  );
}

export default Menu;
