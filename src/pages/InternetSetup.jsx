import React from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import Footer from '../components/Footer';
import Header from '../components/Header';

const InternetSetup = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />

      <main>
        <Breadcrumbs title={'Настройка интернета'} />
        <section class="internet">
          <div class="container">
            <h3 class="internet__title title">Настройка интернета</h3>
            <div class="internet__box">
              <div class="internet__box-content">
                <div class="internet-content">
                  <p class="internet-content__text-title">
                    Настройка сети интернет или локальной сети
                  </p>
                  <div class="internet-content__box-top">
                    <h6 class="internet-content__service-title">Услуга</h6>
                    <h6 class="internet-content__price-title">Цена,</h6>
                  </div>

                  <div class="internet-content__item">
                    <div class="internet-content__item-box">
                      <p class="internet-content__service-text">
                        Устранение неисправности <br />в работе сетевого оборудования
                      </p>
                      <span class="internet-content__service-span">Цена за 1 единицу.</span>
                    </div>
                    <p class="internet-content__price-text">от 3730</p>
                  </div>
                  <div class="internet-content__item">
                    <div class="internet-content__item-box">
                      <p class="internet-content__service-text">
                        Настройка VPN / IDSN / DIAL-UP подключения
                      </p>
                      <span class="internet-content__service-span">Цена за 1 единицу.</span>
                    </div>
                    <p class="internet-content__price-text">1000</p>
                  </div>
                  <div class="internet-content__item">
                    <div class="internet-content__item-box">
                      <p class="internet-content__service-text">
                        Настройка интернет соединения с помощью проводного подключения
                      </p>
                      <span class="internet-content__service-span">Цена за 1 единицу.</span>
                    </div>
                    <p class="internet-content__price-text">1240</p>
                  </div>
                  <div class="internet-content__item">
                    <div class="internet-content__item-box">
                      <p class="internet-content__service-text">
                        Настройка одновременного доступа к сети интернет
                      </p>
                      <span class="internet-content__service-span">
                        С двух и более компьютеров.
                      </span>
                    </div>
                    <p class="internet-content__price-text">2380</p>
                  </div>
                  <div class="internet-content__item">
                    <div class="internet-content__item-box">
                      <p class="internet-content__service-text">Выяснение сетевых настроек</p>
                      <span class="internet-content__service-span">
                        У представителя интернет провайдера. <br />
                        Цена за 1 единицу.
                      </span>
                    </div>
                    <p class="internet-content__price-text">480</p>
                  </div>
                  <div class="internet-content__item">
                    <div class="internet-content__item-box">
                      <p class="internet-content__service-text">
                        Интернет регистрация, создание почтового ящика, учётной записи
                      </p>
                      <span class="internet-content__service-span">
                        (ICQ, Skype и др.). Цена за 1 единицу.
                      </span>
                    </div>
                    <p class="internet-content__price-text">640</p>
                  </div>
                  <div class="internet-content__item">
                    <div class="internet-content__item-box">
                      <p class="internet-content__service-text">Настройка почтовой программы</p>
                      <span class="internet-content__service-span">
                        (Outlook, The Bat и др.). <br />
                        Цена за 1 единицу.
                      </span>
                    </div>
                    <p class="internet-content__price-text">от 780</p>
                  </div>
                  <div class="internet-content__item">
                    <div class="internet-content__item-box">
                      <p class="internet-content__service-text">
                        Настройка дополнительных параметров сетевого и интернет подключения
                      </p>
                      <span class="internet-content__service-span">Цена за 1 единицу.</span>
                    </div>
                    <p class="internet-content__price-text">860</p>
                  </div>
                  <div class="internet-content__item">
                    <div class="internet-content__item-box">
                      <p class="internet-content__service-text">
                        Создание подключения через СкайЛинк, Стрим-TV, GPRS, ADSL, Корбина-TV
                      </p>
                      <span class="internet-content__service-span">Цена за 1 единицу.</span>
                    </div>
                    <p class="internet-content__price-text">1870</p>
                  </div>
                  <div class="internet-content__item">
                    <div class="internet-content__item-box">
                      <p class="internet-content__service-text">
                        Подключение к существующей интернет сети
                      </p>
                      <span class="internet-content__service-span">
                        Цена зависит от сложности. <br />
                        Цена за 1 единицу.
                      </span>
                    </div>
                    <p class="internet-content__price-text">от 1160</p>
                  </div>
                </div>
                <ol class="internet-content__list">
                  Дополнения и примечания:
                  <li class="internet-content__list-text">
                    Все цены указаны в рублях с учетом НДС, но без учета стоимости деталей;
                  </li>
                  <li class="internet-content__list-text">
                    Безналичный расчет возможен при стоимости услуг свыше 5000 рублей;
                  </li>
                  <li class="internet-content__list-text">
                    Наценка на работу с ноутбуком / моноблоком / нетбуками – 20%/25%/30%;
                  </li>
                  <li class="internet-content__list-text">
                    Наценка за неквалифицированное вмешательство – 20%;
                  </li>
                  <li class="internet-content__list-text">
                    Наценка на работу в ночное время (работа начинается или продолжается после 22:00
                    / после 00:00 / после 04:00) – 50%/100%/150%;
                  </li>
                  <li class="internet-content__list-text">
                    Обслуживание компьютеров ниже класса Pentium 4 и AMD Аthlon XP включительно -
                    25%.
                  </li>
                </ol>
                <div class="internet-content">
                  <p class="internet-content__text-title">
                    Обязательные работы при настройке роутеров или Wi-Fi точек доступа
                  </p>
                  <div class="internet-content__box-top">
                    <h6 class="internet-content__service-title">Услуга</h6>
                    <h6 class="internet-content__price-title">Цена,</h6>
                  </div>

                  <div class="internet-content__item">
                    <div class="internet-content__item-box">
                      <p class="internet-content__service-text">
                        Установка драйвера сетевой карты с диска заказчика
                      </p>
                      <span class="internet-content__service-span">Цена за 1 единицу.</span>
                    </div>
                    <p class="internet-content__price-text">350</p>
                  </div>
                  <div class="internet-content__item">
                    <div class="internet-content__item-box">
                      <p class="internet-content__service-text">
                        Установка драйвера сетевой карты с диска мастера
                      </p>
                      <span class="internet-content__service-span">Цена за 1 единицу.</span>
                    </div>
                    <p class="internet-content__price-text">690</p>
                  </div>
                  <div class="internet-content__item">
                    <div class="internet-content__item-box">
                      <p class="internet-content__service-text">
                        Настройка параметров сетевой карты или Wi-Fi адаптера
                      </p>
                      <span class="internet-content__service-span">
                        Скорость передачи, дуплекса и др. <br />
                        Цена за 1 единицу.
                      </span>
                    </div>
                    <p class="internet-content__price-text">870</p>
                  </div>
                  <div class="internet-content__item">
                    <div class="internet-content__item-box">
                      <p class="internet-content__service-text">
                        Подключение сетевой Wi-Fi карты к роутеру или точке доступа
                      </p>
                      <span class="internet-content__service-span">Цена за 1 единицу.</span>
                    </div>
                    <p class="internet-content__price-text">450</p>
                  </div>
                  <div class="internet-content__item">
                    <div class="internet-content__item-box">
                      <p class="internet-content__service-text">
                        Полностью автоматическая настройка роутера или Wi-Fi точки доступа
                      </p>
                      <span class="internet-content__service-span">Цена за 1 единицу.</span>
                    </div>
                    <p class="internet-content__price-text">740</p>
                  </div>
                  <div class="internet-content__item">
                    <div class="internet-content__item-box">
                      <p class="internet-content__service-text">
                        Ручная настройка роутера или Wi-Fi точки доступа
                      </p>
                      <span class="internet-content__service-span">
                        В зависимости от сложности. <br />
                        Цена за 1 единицу.
                      </span>
                    </div>
                    <p class="internet-content__price-text">от 2270</p>
                  </div>
                  <div class="internet-content__item">
                    <div class="internet-content__item-box">
                      <p class="internet-content__service-text">
                        Создание Wi-Fi сети между настроенными устройствами
                      </p>
                      <span class="internet-content__service-span">Цена за 1 единицу.</span>
                    </div>
                    <p class="internet-content__price-text">720</p>
                  </div>
                  <div class="internet-content__item">
                    <div class="internet-content__item-box">
                      <p class="internet-content__service-text">
                        Настройка безопасности локальной или Wi-Fi сети
                      </p>
                      <span class="internet-content__service-span">
                        Защита от несанкционированного <br />
                        доступа. Цена за 1 единицу.
                      </span>
                    </div>
                    <p class="internet-content__price-text">от 1570</p>
                  </div>
                  <div class="internet-content__item">
                    <div class="internet-content__item-box">
                      <p class="internet-content__service-text">Настройка маршрутизатора</p>
                      <span class="internet-content__service-span">
                        Если требуется. <br />
                        Цена за 1 единицу.
                      </span>
                    </div>
                    <p class="internet-content__price-text">от 1180</p>
                  </div>
                  <div class="internet-content__item">
                    <div class="internet-content__item-box">
                      <p class="internet-content__service-text">
                        Настройка общего доступа в интернет или подключение Wi-Fi сети к интернету
                      </p>
                      <span class="internet-content__service-span">
                        Если требуется. Цена за 1 единицу.
                      </span>
                    </div>
                    <p class="internet-content__price-text">1360</p>
                  </div>
                  <div class="internet-content__item">
                    <div class="internet-content__item-box">
                      <p class="internet-content__service-text">
                        Настройка сетевого принтера через проводное соединение
                      </p>
                      <span class="internet-content__service-span">
                        Если требуется. Цена за 1 единицу.
                      </span>
                    </div>
                    <p class="internet-content__price-text">800</p>
                  </div>
                  <div class="internet-content__item">
                    <div class="internet-content__item-box">
                      <p class="internet-content__service-text">
                        Настройка сетевого принтера через Wi-Fi
                      </p>
                      <span class="internet-content__service-span">
                        Если требуется. Цена за 1 единицу.
                      </span>
                    </div>
                    <p class="internet-content__price-text">1170</p>
                  </div>
                  <div class="internet-content__item">
                    <div class="internet-content__item-box">
                      <p class="internet-content__service-text">
                        Создание общих папок и принтеров проводной сети
                      </p>
                      <span class="internet-content__service-span">
                        Если требуется. Цена за 1 единицу.
                      </span>
                    </div>
                    <p class="internet-content__price-text">830</p>
                  </div>
                  <div class="internet-content__item">
                    <div class="internet-content__item-box">
                      <p class="internet-content__service-text">
                        Создание общих папок и принтеров Wi-Fi сети
                      </p>
                      <span class="internet-content__service-span">
                        Если требуется. Цена за 1 единицу.
                      </span>
                    </div>
                    <p class="internet-content__price-text">1280</p>
                  </div>
                  <div class="internet-content__item">
                    <div class="internet-content__item-box">
                      <p class="internet-content__service-text">
                        Перепрошивка роутера, Wi-Fi точки доступа
                      </p>
                      <span class="internet-content__service-span">
                        В зависимости от модели. <br />
                        Если требуется. Цена за 1 единицу.
                      </span>
                    </div>
                    <p class="internet-content__price-text">1300</p>
                  </div>
                </div>
                <p class="internet-content__text">
                  В случае, если клиент отказался хотя бы от одной из обязательных работ, проводимых
                  при настройке роутеров или Wi-Fi точек доступа, то гарантия на всю сделанную
                  работу не предоставляется!
                </p>

                <div class="internet-content">
                  <p class="internet-content__text-title">Выезд мастера, отказ от работ</p>
                  <div class="internet-content__box-top">
                    <h6 class="internet-content__service-title">Услуга</h6>
                    <h6 class="internet-content__price-title">Цена,</h6>
                  </div>

                  <div class="internet-content__item">
                    <div class="internet-content__item-box">
                      <p class="internet-content__service-text internet-content__service-text--active">
                        Выезд и диагностика мастера, при продолжении работ
                      </p>
                    </div>
                    <p class="internet-content__price-text">0</p>
                  </div>
                  <div class="internet-content__item">
                    <div class="internet-content__item-box">
                      <p class="internet-content__service-text internet-content__service-text--active">
                        В случае отказа от работ оплачивается выезд мастера (если тестирование не
                        проводилось)
                      </p>
                    </div>
                    <p class="internet-content__price-text">1000</p>
                  </div>
                  <div class="internet-content__item">
                    <div class="internet-content__item-box">
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
                    <div class="internet-content__item-box">
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

export default InternetSetup;