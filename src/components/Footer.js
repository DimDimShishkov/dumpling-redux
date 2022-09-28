import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__numbers">
        <a className="footer__number" href="tel:8 (949) 999-99-99"
          >8 (949) 999-99-99</a
        >
        <a className="footer__number" href="https://go.2gis.com/pg4oa"
          >ул. Ленина д.45</a
        >
        <p className="footer__number">Работаем с понедельника по воскресенье</p>
        <p className="footer__number">С 12:00 по 02:00</p>
      </div>
      <a href="tel:8 (949) 999-99-99" className="footer__booking">
        Забронировать стол
      </a>
    </footer>
  );
}

export default Footer;
