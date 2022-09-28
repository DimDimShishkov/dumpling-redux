import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [burger, openBurger] = React.useState(false);

  function handleOpenBurger() {
    openBurger(!burger);
  }

  return (
    <header className={`header ${burger && 'header_active'}`}>
      <div className="header__container">
        <div className="header__logo" />

        <button className="header__mobile" onClick={handleOpenBurger}>
          <span className={`header__menu ${burger && 'header__menu_selected'}`}></span>
        </button>

        <nav className={`header__nav ${burger && 'header__nav_selected'}`}>
          <div className="header__links">
            <Link to="/" className="header__link">
              Главная
            </Link>
            <Link to="/about-us" className="header__link">
              О нас
            </Link>
            <Link to="/our-team" className="header__link">
              Наша команда
            </Link>
            <Link to="/menu" className="header__link">
              Меню
            </Link>
            <Link to="/gallery" className="header__link">
              Галерея
            </Link>
            <Link to="/contacts" className="header__link">
              Контакты
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
