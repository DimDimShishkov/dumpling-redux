import React from 'react';

function Contacts() {

  return (
    <section className="main">
      <div className="contacts">
        <div className="contacts__blocks">
          <div className="contacts__block">
            <div className="contacts__items">
              <p className="contacts__title">Для отзывов и предложений:</p>
              <a href="mailto:info@examplemail.ru" className="contacts__link">
                info@examplemail.ru
              </a>
              <p className="contacts__title">Реклама и PR:</p>
              <a href="mailto:info@examplemail.ru" className="contacts__link">
              pr@examplemail.ru
              </a>
              <p className="contacts__title">Адрес:</p>
              <a href="https://go.2gis.com/pg4oa" className="contacts__link">
              ул. Ленина д.45
              </a>
            </div>
            <div className="contacts__items">
              <p className="contacts__title">Для резюме:</p>
              <a href="mailto:hr@examplemail.ru" className="contacts__link">
              hr@examplemail.ru
              </a>
              <p className="contacts__title">Для предложений по закупке:</p>
              <a href="mailto:buy@examplemail.ru" className="contacts__link">
              buy@examplemail.ru
              </a>
              <p className="contacts__title">График работы:</p>
              <p className="contacts__subtitle">Пн-вс: 12:00 - 02:00</p>
            </div>
          </div>
          <a href="tel:8 (999) 999-99-99" className="contacts__phone">
            8 (999) 999-99-99
          </a>
        </div>
        <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d865.6713853639216!2d37.6207923698116!3d55.75374679080746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a5759f5b76b%3A0xde502cd817a1b053!2z0JzQsNCy0LfQvtC70LXQuSDQki7QmC4g0JvQtdC90LjQvdCwINC90LAg0JrRgNCw0YHQvdC-0Lkg0L_Qu9C-0YnQsNC00Lg!5e0!3m2!1sru!2sru!4v1664196008036!5m2!1sru!2sru"
              className='contacts__iframe' allowFullScreen=""   tabIndex="0" title={'map'} frameBorder="0"
            />
      </div>
    </section>
  );
}

export default Contacts;
