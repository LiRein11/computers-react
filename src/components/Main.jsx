import React from 'react';

const Main = () => {
  return (
    <main>
      <section className="bg">
        <div className="bg__img" style={{ backgroundImage: "url('images/bg.png')" }}>
          <div className="container">
            <h3 className="bg__title">Скорая помощь компьютеру</h3>
            <p className="bg__text">Выезд в любой район Екатеринбурга и диагностика бесплатно</p>
            <a className="bg__btn" href="#">
              Получить скидку
            </a>
          </div>
        </div>
      </section>
      <section className="services">
        <div className="container">
          <h2 className="services__title">Услуги</h2>
          <div className="services__items">
            <a
              className="services-item__link"
              target="_blank"
              rel="noopener noreferrer"
              href="./computer-repair.html">
              <div className="services-item services-item__one">
                <p className="services-item__text">Ремонт компьютера</p>
              </div>
            </a>
            <a
              className="services-item__link"
              target="_blank"
              rel="noopener noreferrer"
              href="./laptop-repair.html">
              <div className="services-item services-item__two">
                <p className="services-item__text">Ремонт ноутбука</p>
              </div>
            </a>
            <a
              className="services-item__link"
              target="_blank"
              rel="noopener noreferrer"
              href="./installation-programs.html">
              <div className="services-item services-item__three">
                <p className="services-item__text">Установка программ</p>
              </div>
            </a>
            <a
              className="services-item__link"
              target="_blank"
              rel="noopener noreferrer"
              href="./system-installation.html">
              <div className="services-item services-item__four">
                <p className="services-item__text">Установка системы</p>
              </div>
            </a>
            <a
              className="services-item__link"
              target="_blank"
              rel="noopener noreferrer"
              href="./internet-setup.html">
              <div className="services-item services-item__five">
                <p className="services-item__text">Настройка интернета</p>
              </div>
            </a>
            <a
              className="services-item__link"
              target="_blank"
              rel="noopener noreferrer"
              href="./virus-removal.html">
              <div className="services-item services-item__six">
                <p className="services-item__text">Удаление вирусов</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section className="discount" style={{ backgroundImage: "url('../images/discount-bg.jpg')" }}>
        <div className="container">
          <h5 className="discount__title">Скидка 20%</h5>
          <span className="discount__span">при первом обращении</span>
          <form className="discount__form" action="#">
            <input className="discount__form-input" type="text" placeholder="Телефон" />
            <button type="submit" className="discount__form-btn">
              Отправить
            </button>
          </form>
          <p className="discount__text">
            Нажимая на кнопку «Отправить», вы даёте согласие на{' '}
            <a href="#">обработку персональных данных</a>
          </p>
        </div>
      </section>

      <section className="benefits">
        <div className="container">
          <h2 className="benefits__title">Преимущества</h2>
          <div className="benefits-tabs__top">
            <a
              className="benefits-tabs__top-item benefits-tabs__top-item--active benefits-tabs__top-item--one benefits-tabs__top-item--one--active benefits-tabs__top-item--one1 benefits-tabs__top-item--one1--active"
              href="#tab-1">
              <div className="benefits-tabs__top-box--one benefits-tabs__top-box--one1 benefits-tabs__top-box--one1--active benefits-tabs__top-box--one--active"></div>
              <p className="benefits-tabs__top-text">Гарантия</p>
            </a>
            <a
              className="benefits-tabs__top-item benefits-tabs__top-item--two benefits-tabs__top-item--two1"
              href="#tab-2">
              <div className="benefits-tabs__top-box--two benefits-tabs__top-box--two1"></div>
              <p className="benefits-tabs__top-text">Время</p>
            </a>
            <a
              className="benefits-tabs__top-item benefits-tabs__top-item--three benefits-tabs__top-item--three1"
              href="#tab-3">
              <div className="benefits-tabs__top-box--three benefits-tabs__top-box--three1"></div>
              <p className="benefits-tabs__top-text">Стаж</p>
            </a>
            <a
              className="benefits-tabs__top-item benefits-tabs__top-item--four benefits-tabs__top-item--four1"
              href="#tab-4">
              <div className="benefits-tabs__top-box--four benefits-tabs__top-box--four1"></div>
              <p className="benefits-tabs__top-text">Диагностика</p>
            </a>
          </div>
          <div className="benefits-tabs__content">
            <div
              className="benefits-tabs__content-item benefits-tabs__content-item--active"
              id="tab-1">
              <div className="benefits-tabs__content-info">
                <img
                  className="benefits-tabs__content-img"
                  src="images/benefits/1-1-1.jpg"
                  alt="benefits"
                />
                <img
                  className="benefits-tabs__content-img benefits-tabs__content-img--active1"
                  src="images/benefits/1-1-1-active1.jpg"
                  alt="benefits"
                />
                <div className="benefits-tabs__content-box">
                  <h6 className="benefits-tabs__content-title">Гарантия</h6>
                  <p className="benefits-tabs__content-text">
                    Наш сервисный центр предоставляет гарантию до 3 лет, потому что мы используем
                    только качественные комплектующие для ваших компьютеров и ноутбуков.
                  </p>
                </div>
              </div>
            </div>
            <div className="benefits-tabs__content-item" id="tab-2">
              <div className="benefits-tabs__content-info">
                <img
                  className="benefits-tabs__content-img"
                  src="images/benefits/2-2-2.jpg"
                  alt="benefits"
                />
                <img
                  className="benefits-tabs__content-img benefits-tabs__content-img--active1"
                  src="images/benefits/2-2-2-active1.jpg"
                  alt="benefits"
                />
                <div className="benefits-tabs__content-box">
                  <h6 className="benefits-tabs__content-title">Время</h6>
                  <p className="benefits-tabs__content-text">
                    Прибудем к вам в течении часа, и в короткие сроки произведём качественный
                    ремонт, ведь мы ценим и уважаем ваше время.
                  </p>
                </div>
              </div>
            </div>
            <div className="benefits-tabs__content-item" id="tab-3">
              <div className="benefits-tabs__content-info">
                <img
                  className="benefits-tabs__content-img"
                  src="images/benefits/3-3-3.jpg"
                  alt="benefits"
                />
                <img
                  className="benefits-tabs__content-img benefits-tabs__content-img--active1"
                  src="images/benefits/3-3-3-active1.jpg"
                  alt="benefits"
                />
                <div className="benefits-tabs__content-box">
                  <h6 className="benefits-tabs__content-title">Стаж</h6>
                  <p className="benefits-tabs__content-text">
                    Мы тщательно отбираем людей в команду. Все наши сотрудники профессионалы своего
                    дела и имеют опыт в ремонте компьютеров минимум от 2 - ух лет.
                  </p>
                </div>
              </div>
            </div>
            <div className="benefits-tabs__content-item" id="tab-4">
              <div className="benefits-tabs__content-info">
                <img
                  className="benefits-tabs__content-img"
                  src="images/benefits/4-4-4.jpg"
                  alt="benefits"
                />
                <img
                  className="benefits-tabs__content-img benefits-tabs__content-img--active1"
                  src="images/benefits/4-4-4-active1.jpg"
                  alt="benefits"
                />
                <div className="benefits-tabs__content-box">
                  <h6 className="benefits-tabs__content-title">Диагностика</h6>
                  <p className="benefits-tabs__content-text benefits-tabs__content-text--fix">
                    При обращении к нам, вам не придётся платить за выезд сотрудника и диагностику
                    вашей техники. Поскольку данные услуги мы предоставляем совершенно бесплатно.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="reviews">
        <div className="container">
          <h2 className="reviews__title">Отзывы</h2>
          <div className="reviews__items">
            <a
              className="reviews__item"
              href="https://www.youtube.com/watch?v=GhoJmuM0MC0&ab_channel=CompsMaster"
              target="_blank">
              <img className="reviews__item-img" src="images/reviews/1.jpg" alt="reviews img" />
              <h5 className="reviews__item-title">Владимир</h5>
              <p className="reviews__item-text">Замена материнской платы</p>
            </a>
            <a
              className="reviews__item"
              href="https://www.youtube.com/watch?v=-367GUKRj4o&ab_channel=MATRIXPARADISE"
              target="_blank">
              <img className="reviews__item-img" src="images/reviews/2.jpg" alt="reviews img" />
              <h5 className="reviews__item-title">Валентина</h5>
              <p className="reviews__item-text">Переустановка «Windows»</p>
            </a>
            <a
              className="reviews__item"
              href="https://www.youtube.com/watch?v=_hCqs5i4LkY&ab_channel=IT%D1%88%D1%82%D1%83%D1%87%D0%BA%D0%B8%D0%B8%D1%82%D0%BE%D0%B2%D0%B0%D1%80%D1%8B%D0%B8%D0%B7%D0%9A%D0%B8%D1%82%D0%B0%D1%8F"
              target="_blank">
              <img className="reviews__item-img" src="images/reviews/3.jpg" alt="reviews img" />
              <h5 className="reviews__item-title reviews__item-title--fix">Роман</h5>
              <p className="reviews__item-text">Замена блока питания у ноутбука</p>
            </a>
            <a
              className="reviews__item reviews__item-fix"
              href="https://www.youtube.com/watch?v=-367GUKRj4o&ab_channel=MATRIXPARADISE"
              target="_blank">
              <img className="reviews__item-img" src="images/reviews/2.jpg" alt="reviews img" />
              <h5 className="reviews__item-title">Валентина</h5>
              <p className="reviews__item-text">Переустановка «Windows»</p>
            </a>

            <a
              className="reviews__item reviews__item-hide"
              href="https://www.youtube.com/watch?v=GhoJmuM0MC0&ab_channel=CompsMaster"
              target="_blank">
              <img className="reviews__item-img" src="images/reviews/1.jpg" alt="reviews img" />
              <h5 className="reviews__item-title">Владимир</h5>
              <p className="reviews__item-text">Замена материнской платы</p>
            </a>
            <a
              className="reviews__item reviews__item-hide"
              href="https://www.youtube.com/watch?v=-367GUKRj4o&ab_channel=MATRIXPARADISE"
              target="_blank">
              <img className="reviews__item-img" src="images/reviews/2.jpg" alt="reviews img" />
              <h5 className="reviews__item-title">Валентина</h5>
              <p className="reviews__item-text">Переустановка «Windows»</p>
            </a>
            <a
              className="reviews__item reviews__item-hide"
              href="https://www.youtube.com/watch?v=_hCqs5i4LkY&ab_channel=IT%D1%88%D1%82%D1%83%D1%87%D0%BA%D0%B8%D0%B8%D1%82%D0%BE%D0%B2%D0%B0%D1%80%D1%8B%D0%B8%D0%B7%D0%9A%D0%B8%D1%82%D0%B0%D1%8F"
              target="_blank">
              <img className="reviews__item-img" src="images/reviews/3.jpg" alt="reviews img" />
              <h5 className="reviews__item-title reviews__item-title--fix">Роман</h5>
              <p className="reviews__item-text">Замена блока питания у ноутбука</p>
            </a>

            <a
              className="reviews__item reviews__item-hide"
              href="https://www.youtube.com/watch?v=GhoJmuM0MC0&ab_channel=CompsMaster"
              target="_blank">
              <img className="reviews__item-img" src="images/reviews/1.jpg" alt="reviews img" />
              <h5 className="reviews__item-title">Владимир</h5>
              <p className="reviews__item-text">Замена материнской платы</p>
            </a>
            <a
              className="reviews__item reviews__item-hide"
              href="https://www.youtube.com/watch?v=-367GUKRj4o&ab_channel=MATRIXPARADISE"
              target="_blank">
              <img className="reviews__item-img" src="images/reviews/2.jpg" alt="reviews img" />
              <h5 className="reviews__item-title">Валентина</h5>
              <p className="reviews__item-text">Переустановка «Windows»</p>
            </a>
            <a
              className="reviews__item reviews__item-hide"
              href="https://www.youtube.com/watch?v=_hCqs5i4LkY&ab_channel=IT%D1%88%D1%82%D1%83%D1%87%D0%BA%D0%B8%D0%B8%D1%82%D0%BE%D0%B2%D0%B0%D1%80%D1%8B%D0%B8%D0%B7%D0%9A%D0%B8%D1%82%D0%B0%D1%8F"
              target="_blank">
              <img className="reviews__item-img" src="images/reviews/3.jpg" alt="reviews img" />
              <h5 className="reviews__item-title reviews__item-title--fix">Роман</h5>
              <p className="reviews__item-text">Замена блока питания у ноутбука</p>
            </a>
          </div>
          <div className="pagination">
            <a className="pagination__prev" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16" viewBox="0 0 10 16">
                <image
                  id="Направление"
                  width="10"
                  height="16"
                  // xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAQCAYAAAAvf+5AAAABFUlEQVQokXWSv0oEQQyHv7tbBLuFAwVLW5tBsF9EFBTBUkUwgiD4Cjbb6BtYnUWK808rB4K+ghZTaClsZWd9IspKMAfr7hoYyPzmy0wySSfPc/4zETkHjoHvpI0RkT5wCay5dN9tgeaAhwo0BDaTGrQC3AB9l85U9cScpALtAApMASVwpKqDyXnXIYu6cmgMrFchs05RFCYc+v4Z2FbVl3ruBpbu3zr00fYT1apLX61m4IUfbAGPIrLQBvbSNB2FEL6AZWAWOAghPMUYXxtPq+opsAt8AtPAnYhMCvybo6peAxvAu+sDEbELfquuD4W3cAQsumQt3G/0WlXfgFUbBJf2LLCXZVmjwhjjOMY4DCHMAEvA/A8UQFVF2c7rdwAAAABJRU5ErkJggg=="
                />
              </svg>
            </a>
            <ul className="pagination__list">
              <li className="pagination__item">
                <a className="pagination__link pagination__link--active" href="#">
                  1
                </a>
              </li>
              <li className="pagination__item">
                <a className="pagination__link" href="#">
                  2
                </a>
              </li>
              <li className="pagination__item">
                <a className="pagination__link" href="#">
                  3
                </a>
              </li>
            </ul>
            <a className="pagination__next" href=" #">
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16" viewBox="0 0 10 16">
                <image
                  id="Направление"
                  width="10"
                  height="16"
                  // xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAQCAYAAAAvf+5AAAABEElEQVQokY2SvUpDQRCFP41YXxAExTcQYRpL5WIjKIKtaDFFtPERYusrCKLFCKKliqTQVxDCNumC3MrOWhDhyoQJ3B8DHthiz37MGWZ2piiKH6ADXJjZKVPkYB/YiecX4NDMPpv4LLAH3MZ9G3hV1eUm2MmyrEwpPYjIPLABLAEqIoOU0nu14lhm1gNOgBJYAPqqetACA76Kfr8AT7hT1d44Os/zWi8ppZGIPAKbwCKwJSIrtYqVykNgHXgKq/snGCrjtHucSFVXgTdgP6zrFqiqPkuH1sI6M7PjuQbUBS4j6dstM7uvRavqOeDjcc9XuDuBXL5rf7gBjsIb+FrN7KOa5tHP//kUDnrzrunfDPgFQL1X0AtPExoAAAAASUVORK5CYII="
                />
              </svg>
            </a>
          </div>
          <button type="button" className="reviews__button-show reviews__button-show--one">
            Показать ещё
          </button>
          <button
            type="button"
            className="reviews__button-show reviews__button-show--one reviews__button-show--one active">
            Свернуть
          </button>
          <button type="button" className="reviews__button-download reviews__button-download--one">
            Загрузить
          </button>
          <div className="reviews__comments">
            <div className="reviews__comment">
              <a className="reviews__comment-link" href="#">
                <img
                  className="reviews__comment-img"
                  src="images/reviews/avatar1.jpg"
                  alt="avatar"
                />
              </a>
              <div className="reviews__comment-info">
                <a className="reviews__comment-name">Игорь Страхов</a>
                <p className="reviews__comment-text">
                  Лучший сервис для починки компьютеров, обратился к ним по причине того, что сгорел
                  чип на материнке, заменили за день, и вот уже как пол года всё отлично работает,
                  специально хотел написать отзыв позже, чтобы убедиться что всё будет работать
                  через достаточное количество времени.
                </p>
              </div>
            </div>
            <div className="reviews__comment">
              <a className="reviews__comment-link" href="#">
                <img
                  className="reviews__comment-img"
                  src="images/reviews/avatar2.jpg"
                  alt="avatar"
                />
              </a>
              <div className="reviews__comment-info">
                <a className="reviews__comment-name">Бенджамин Баттон</a>
                <p className="reviews__comment-text">
                  Чуваки реально шарят за починку компов, всем советую! Обращаюсь в этот сервис уже
                  3 раз и всем доволен, рекомендую всем друзьям.
                </p>
              </div>
            </div>
            <div className="reviews__comment reviews__comment-hide">
              <a className="reviews__comment-link" href="#">
                <img
                  className="reviews__comment-img"
                  src="images/reviews/avatar1.jpg"
                  alt="avatar"
                />
              </a>
              <div className="reviews__comment-info">
                <a className="reviews__comment-name">Игорь Страхов</a>
                <p className="reviews__comment-text">
                  Лучший сервис для починки компьютеров, обратился к ним по причине того, что сгорел
                  чип на материнке, заменили за день, и вот уже как пол года всё отлично работает,
                  специально хотел написать отзыв позже, чтобы убедиться что всё будет работать
                  через достаточное количество времени.
                </p>
              </div>
            </div>
            <div className="reviews__comment reviews__comment-hide">
              <a className="reviews__comment-link" href="#">
                <img
                  className="reviews__comment-img"
                  src="images/reviews/avatar2.jpg"
                  alt="avatar"
                />
              </a>
              <div className="reviews__comment-info">
                <a className="reviews__comment-name">Бенджамин Баттон</a>
                <p className="reviews__comment-text">
                  Чуваки реально шарят за починку компов, всем советую! Обращаюсь в этот сервис уже
                  3 раз и всем доволен, рекомендую всем друзьям.
                </p>
              </div>
            </div>
          </div>
          <div className="pagination">
            <a className="pagination__prev" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16" viewBox="0 0 10 16">
                <image
                  id="Направление"
                  width="10"
                  height="16"
                  // xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAQCAYAAAAvf+5AAAABFUlEQVQokXWSv0oEQQyHv7tbBLuFAwVLW5tBsF9EFBTBUkUwgiD4Cjbb6BtYnUWK808rB4K+ghZTaClsZWd9IspKMAfr7hoYyPzmy0wySSfPc/4zETkHjoHvpI0RkT5wCay5dN9tgeaAhwo0BDaTGrQC3AB9l85U9cScpALtAApMASVwpKqDyXnXIYu6cmgMrFchs05RFCYc+v4Z2FbVl3ruBpbu3zr00fYT1apLX61m4IUfbAGPIrLQBvbSNB2FEL6AZWAWOAghPMUYXxtPq+opsAt8AtPAnYhMCvybo6peAxvAu+sDEbELfquuD4W3cAQsumQt3G/0WlXfgFUbBJf2LLCXZVmjwhjjOMY4DCHMAEvA/A8UQFVF2c7rdwAAAABJRU5ErkJggg=="
                />
              </svg>
            </a>
            <ul className="pagination__list">
              <li className="pagination__item">
                <a className="pagination__link pagination__link--active" href="#">
                  1
                </a>
              </li>
              <li className="pagination__item">
                <a className="pagination__link" href="#">
                  2
                </a>
              </li>
              <li className="pagination__item">
                <a className="pagination__link" href="#">
                  3
                </a>
              </li>
            </ul>
            <a className="pagination__next" href=" #">
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16" viewBox="0 0 10 16">
                <image
                  id="Направление"
                  width="10"
                  height="16"
                  // xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAQCAYAAAAvf+5AAAABEElEQVQokY2SvUpDQRCFP41YXxAExTcQYRpL5WIjKIKtaDFFtPERYusrCKLFCKKliqTQVxDCNumC3MrOWhDhyoQJ3B8DHthiz37MGWZ2piiKH6ADXJjZKVPkYB/YiecX4NDMPpv4LLAH3MZ9G3hV1eUm2MmyrEwpPYjIPLABLAEqIoOU0nu14lhm1gNOgBJYAPqqetACA76Kfr8AT7hT1d44Os/zWi8ppZGIPAKbwCKwJSIrtYqVykNgHXgKq/snGCrjtHucSFVXgTdgP6zrFqiqPkuH1sI6M7PjuQbUBS4j6dstM7uvRavqOeDjcc9XuDuBXL5rf7gBjsIb+FrN7KOa5tHP//kUDnrzrunfDPgFQL1X0AtPExoAAAAASUVORK5CYII="
                />
              </svg>
            </a>
          </div>
          <button type="button" className="reviews__button-show reviews__button-show--two">
            Показать ещё
          </button>
          <button
            type="button"
            className="reviews__button-show reviews__button-show--two reviews__button-show--two active">
            Свернуть
          </button>
          <button type="button" className="reviews__button-download reviews__button-download--two">
            Загрузить
          </button>
        </div>
      </section>

      <section className="problems">
        <div className="container">
          <h4 className="problems__title">Возникшая проблема</h4>
          <p className="problems__text">с компьютером</p>
          <div className="problems__items">
            <a className="problems__item" href="#">
              Греется
            </a>
            <a className="problems__item" href="#">
              Антивирус
            </a>
            <a className="problems__item" href="#">
              Вирус
            </a>
            <a className="problems__item" href="#">
              Интернет
            </a>
            <a className="problems__item" href="#">
              Зависает
            </a>
            <a className="problems__item" href="#">
              Не включается
            </a>
            <a className="problems__item" href="#">
              Выдаёт ошибку
            </a>
            <a className="problems__item" href="#">
              Программа
            </a>
            <a className="problems__item" href="#">
              Смс-банер
            </a>
            <a className="problems__item" href="#">
              Слетел «windows»
            </a>
            <a className="problems__item" href="#">
              Нет изображения
            </a>
            <a className="problems__item" href="#">
              Веб-страница
            </a>
          </div>
        </div>
      </section>
      <section className="contacts">
        <div className="container">
          <h2 className="contacts__title">Контакты</h2>
          <div className="contacts-content">
            <div className="contacts-content__info">
              <h6 className="contacts-content__info-title">
                Адрес
                <span>г. Екатеринубург</span>
              </h6>
              <h6 className="contacts-content__info-title">
                Телефон
                <span>+ 7 (953) 006 - 97 - 57</span>
              </h6>
              <h6 className="contacts-content__info-title">
                Работаем
                <span>С 10:00 до 22:00 без выходных</span>
              </h6>
            </div>
            <div className="contacts-content__feedback">
              <h6 className="contacts-content__feedback-title">Обратная связь</h6>
              <form className="contacts-content__feedback-form" action="#">
                <input
                  className="contacts-content__feedback-input"
                  type="text"
                  placeholder="Телефон"
                />
                <button type="submit" className="contacts-content__feedback-btn">
                  Отправить
                </button>
              </form>
              <p className="contacts-content__feedback-text">
                Нажимая на кнопку «Отправить», вы даёте согласие на{' '}
                <a href="#">обработку персональных данных</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;