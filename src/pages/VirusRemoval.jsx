import React from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import Footer from '../components/Footer';
import Header from '../components/Header';

const VirusRemoval = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />

      <main>
        <Breadcrumbs title={'Удаление вирусов'} />
        <section class="internet">
          <div class="container">
            <h3 class="internet__title title">Удаление вирусов</h3>
            <div class="internet__box">
              <div class="internet__box-content">
                <div class="internet-content">
                  <p class="internet-content__text-title">
                    Поиск, устранение вирусов и защита от них
                  </p>
                  <div class="internet-content__box-top">
                    <h6 class="internet-content__service-title">Услуга</h6>
                    <h6 class="internet-content__price-title">Цена,</h6>
                  </div>

                  <div class="internet-content__item">
                    <div class="internet-content__item-box internet-content__item-box--active">
                      <p class="internet-content__service-text">
                        Удаление вирусов стандартными методами
                      </p>
                      <span class="internet-content__service-span">
                        Без установки специализированного программного обеспечения и без сохранения
                        целостности информации. <br />
                        Цена за 1 вирус.
                      </span>
                    </div>
                    <p class="internet-content__price-text">от 190</p>
                  </div>
                  <div class="internet-content__item">
                    <div class="internet-content__item-box internet-content__item-box--active">
                      <p class="internet-content__service-text">
                        Проверка на наличие вирусов, без устранения
                      </p>
                      <span class="internet-content__service-span">
                        До 30 минут 760 Руб., далее за каждые 30 минут 570 Руб.
                      </span>
                    </div>
                    <p class="internet-content__price-text">от 760</p>
                  </div>
                  <div class="internet-content__item">
                    <div class="internet-content__item-box internet-content__item-box--active">
                      <p class="internet-content__service-text">
                        Устранение вирусов и банеров не стандартными методами
                      </p>
                      <span class="internet-content__service-span">
                        С установкой специального программного обеспечения или вручную, с
                        сохранением целостности информации. Цена за 1 единицу.
                      </span>
                    </div>
                    <p class="internet-content__price-text">от 3700</p>
                  </div>
                  <div class="internet-content__item">
                    <div class="internet-content__item-box internet-content__item-box--active">
                      <p class="internet-content__service-text">
                        Комплексная настройка безопасности
                      </p>
                      <span class="internet-content__service-span">
                        Включает установку комплексной антивирусной защиты, защиты электронной
                        почты, настройку брандмаузера Firewall, настройку безопасности
                        интернет-браузеров, обновление антивирусных баз и настройку антивируса на
                        автоматическую работу. Цена за 1 единицу.
                      </span>
                    </div>
                    <p class="internet-content__price-text">2980</p>
                  </div>
                  <div class="internet-content__item">
                    <div class="internet-content__item-box internet-content__item-box--active">
                      <p class="internet-content__service-text">
                        Установка freeware. Антивирусного сканера файлов, не требующего инсталляции
                      </p>
                      <span class="internet-content__service-span">Цена за 1 единицу.</span>
                    </div>
                    <p class="internet-content__price-text">от 150</p>
                  </div>
                  <div class="internet-content__item">
                    <div class="internet-content__item-box internet-content__item-box--active">
                      <p class="internet-content__service-text">
                        Настройка параметров freeware программ, не требующих инсталляции
                      </p>
                      <span class="internet-content__service-span">Цена за 1 единицу.</span>
                    </div>
                    <p class="internet-content__price-text">от 80</p>
                  </div>
                  <div class="internet-content__item">
                    <div class="internet-content__item-box internet-content__item-box--active">
                      <p class="internet-content__service-text">
                        Установка стандартного freeware антивируса. Защита файлов требующих
                        инсталляции
                      </p>
                      <span class="internet-content__service-span">Цена за 1 единицу.</span>
                    </div>
                    <p class="internet-content__price-text">от 940</p>
                  </div>
                </div>
                <p class="internet-content__text">
                  При проведении работ по устранению вирусов, в обязательном порядке проводится
                  установка комплексной антивирусной защиты. При отказе от защиты гарантия на работу
                  не предоставляется.
                </p>

                <div class="internet-content">
                  <p class="internet-content__text-title">Выезд мастера, отказ от работ</p>
                  <div class="internet-content__box-top">
                    <h6 class="internet-content__service-title">Услуга</h6>
                    <h6 class="internet-content__price-title">Цена,</h6>
                  </div>

                  <div class="internet-content__item">
                    <div class="internet-content__item-box internet-content__item-box--active">
                      <p class="internet-content__service-text internet-content__service-text--active">
                        Выезд и диагностика мастера, при продолжении работ
                      </p>
                    </div>
                    <p class="internet-content__price-text">0</p>
                  </div>
                  <div class="internet-content__item">
                    <div class="internet-content__item-box internet-content__item-box--active">
                      <p class="internet-content__service-text internet-content__service-text--active">
                        В случае отказа от работ оплачивается выезд мастера (если тестирование не
                        проводилось)
                      </p>
                    </div>
                    <p class="internet-content__price-text">1000</p>
                  </div>
                  <div class="internet-content__item">
                    <div class="internet-content__item-box internet-content__item-box--active">
                      <p class="internet-content__service-text">
                        Комплексное тестирование программного обеспечения, аппаратного обеспечения
                        или локальной сети
                      </p>
                      <span class="internet-content__service-span">
                        Оплачивается в случае отказа клиента от проведения работ нашим мастером по
                        устранению неисправности, либо при невозможности проведения работ, либо в
                        случае, если ремонт компьютера или ноутбука нецелесообразен. <br />
                        Цена за 1 единицу.
                      </span>
                    </div>
                    <p class="internet-content__price-text">2400</p>
                  </div>
                  <div class="internet-content__item">
                    <div class="internet-content__item-box internet-content__item-box--active">
                      <p class="internet-content__service-text">Ложный вызов мастера</p>
                      <span class="internet-content__service-span">
                        Если клиент оформил заявку, а после приезда мастера, клиент отказался
                        принять вызванного мастера, либо мастер не смог приступить к работе или
                        тестированию по независящим от мастера причинам, то вызов является ложным и
                        платным.
                      </span>
                    </div>
                    <p class="internet-content__price-text">1000</p>
                  </div>
                </div>
              </div>
              <div class="internet-connection">
                <h5 class="internet-connection__title">Обратная связь</h5>
                <form class="internet-connection__form" action="#">
                  <input class="internet-connection__input" type="text" placeholder="Телефон" />
                  <button type="submit" class="internet-connection__btn">
                    Отправить
                  </button>
                </form>
                <p class="internet-connection__text">
                  Нажимая на кнопку «Отправить», вы даёте согласие на{' '}
                  <a href="#">обработку персональных данных</a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default VirusRemoval;
