import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="header-content__left">
            <a className="logo" href="#">
              <img className="logo__img" src="images/logo.jpg" alt="logo" />
              <img className="logo__img logo__img--active" src="images/logo2.jpg" alt="logo" />
            </a>
            <div className="header-content__left-box">
              <p className="header-content__left-text">
                Ремонт компьютеров в Екатеринбурге
                <span className="header-content__left-span">
                  Работаем: с 10:00 до 22:00 без выходных
                </span>
              </p>
            </div>
          </div>

          <div className="header-content__right">
            <div className="header-content__right-box">
              <a className="header-content__right-phone" href="tel:+79530069757">
                + 7 953 006-97-57
              </a>
              <a className="header-content__right-btn" href="#">
                Вызвать мастера
              </a>
            </div>
            <nav className="menu">
              <button className="menu__btn">
                <img className="menu__btn-img" src="images/menu-btn.jpg" alt="btn" />
                <img
                  className="menu__btn-img menu__btn-img--active"
                  src="images/closed-menu.jpg"
                  alt="btn"
                />
              </button>
              <ul className="menu__list">
                <li className="menu__list-item">
                  <a className="menu__list-link" href="#">
                    Услуги
                  </a>
                </li>
                <li className="menu__list-item">
                  <a className="menu__list-link" href="#">
                    Преимущества
                  </a>
                </li>
                <li className="menu__list-item">
                  <a className="menu__list-link" href="#">
                    Отзывы
                  </a>
                </li>
                <li className="menu__list-item">
                  <a className="menu__list-link" href="#">
                    Контакты
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;