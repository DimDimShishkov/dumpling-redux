import React from 'react';

function Main() {
  return (
    <section className="main">
      <div className="main__text">
        <h1 className="main__title">Хинкальная на Ленина</h1>
        <p className="main__description">
          Хинкальная на Ленина это уютный ресторан в самом центре города. Вас
          ждет живая музыка со вторника по воскресенье с 21:00 а тихая и уютная
          атмосфера с панорамными окнами порадуют всегда. В меню представлен
          широкий выбор традиционной грузинской и европейской кухни. Большая
          винная и чайная карты.
        </p>
      </div>
      <iframe
        className="main__video"
        src="https://www.youtube.com/embed/0YjJXc9R2HI"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </section>
  );
}

export default Main;
