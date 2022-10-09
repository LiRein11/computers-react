import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-content__left">
            <p className="footer-content__left-text--one">Ремонт компьютеров в Екатеринбурге</p>
            <p className="footer-content__left-text--two">
              Работаем: с 10:00 до 22:00 без выходных
            </p>
          </div>
          <div className="footer-content__right">
            <a className="footer-content__right-btn" href="#">
              Вызвать мастера
            </a>
            <a className="footer-content__right-phone" href="tel:+79530069757">
              + 7 953 006-97-57
            </a>
          </div>
        </div>
        <p className="footer-content__text">
          &copy; 2013 - 2022 Сервис по ремонту компьютеров «СПК»
        </p>
      </div>
    </footer>
  );
};

export default Footer;