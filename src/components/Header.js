import React from 'react';
import { Link } from 'react-router-dom';

function Header({pageState}) {
  const [burger, openBurger] = React.useState(false);

  function handleOpenBurger() {
    openBurger(!burger);
    pageState()
  }

  return (
    <header className={`header ${burger && 'header_active'}`}>
      <div className="header__container">
        <div className="header__logo" />

        <button className="header__mobile" onClick={handleOpenBurger}>
          <span className={`header__menu ${burger && 'header__menu_selected'}`}></span>
        </button>

        <nav className={`header__nav ${burger && 'header__nav_selected'}`}>
          <div className="header__overlay" onClick={handleOpenBurger}>
          <div className="header__links">
            <Link to="/dumpling-redux" className="header__link">
              Главная
            </Link>
            <Link to="/dumpling-redux/about-us" className="header__link">
              О нас
            </Link>
            <Link to="/dumpling-redux/menu" className="header__link">
              Меню
            </Link>
            <Link to="/dumpling-redux/gallery" className="header__link">
              Галерея
            </Link>
            <Link to="/dumpling-redux/contacts" className="header__link">
              Контакты
            </Link>
          </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
