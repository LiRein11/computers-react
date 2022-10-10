import React from 'react';

import Breadcrumbs from '../components/Breadcrumbs';
import Footer from '../components/Footer';
import Header from '../components/Header';

const InstallationPrograms = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />

      <main>
        <Breadcrumbs title={'Установка программ'} />
        <section class="internet">
          <div class="container">
            <h3 class="internet__title title">Установка программ</h3>
            <div class="internet__box">
              <div class="internet__box-content">
                <div class="internet-content">
                  <p class="internet-content__text-title">Установка и настройка Windows</p>
                  <div class="internet-content__box-top">
                    <h6 class="internet-content__service-title">Услуга</h6>
                    <h6 class="internet-content__price-title">Цена,</h6>
                  </div>

                  <div class="internet-content__item">
                    <div class="internet-content__item-box">
                      <p class="internet-content__service-text">
                        Установка Windows XP, Vista, 7 (seven), Windows 10
                      </p>
                      <span class="internet-content__service-span">
                        С лицензионного дистрибутива заказчика. Цена за 1 единицу.
                      </span>
                    </div>
                    <p class="internet-content__price-text">240</p>
                  </div>
                  <div class="internet-content__item">
                    <div class="internet-content__item-box">
                      <p class="internet-content__service-text">Активация Windows 7 (seven)</p>
                      <span class="internet-content__service-span">
                        В случае активации + 6 месяцев к гарантии на операционную систему.
                      </span>
                    </div>
                    <p class="internet-content__price-text">3000</p>
                  </div>
                  <div class="internet-content__item">
                    <div class="internet-content__item-box">
                      <p class="internet-content__service-text">Активация Windows 8</p>
                      <span class="internet-content__service-span">
                        В случае активации + 6 месяцев к гарантии на операционную систему.
                      </span>
                    </div>
                    <p class="internet-content__price-text">5000</p>
                  </div>
                </div>
                <div class="internet-content">
                  <p class="internet-content__text-title">Оптимизация Windows</p>
                  <div class="internet-content__box-top">
                    <h6 class="internet-content__service-title">Услуга</h6>
                    <h6 class="internet-content__price-title">Цена,</h6>
                  </div>

                  <div class="internet-content__item">
                    <div class="internet-content__item-box">
                      <p class="internet-content__service-text">
                        Отчистка области автозапуска программ и динамических библиотек Windows
                        (*.dll)
                      </p>
                      <span class="internet-content__service-span">Цена за 1 единицу.</span>
                    </div>
                    <p class="internet-content__price-text">от 1640</p>
                  </div>
                  <div class="internet-content__item">
                    <div class="internet-content__item-box">
                      <p class="internet-content__service-text">
                        Очистка системного реестра Windows, удаление в нём неверных записей
                      </p>
                      <span class="internet-content__service-span">Цена за 1 единицу.</span>
                    </div>
                    <p class="internet-content__price-text">от 1730</p>
                  </div>
                  <div class="internet-content__item">
                    <div class="internet-content__item-box">
                      <p class="internet-content__service-text">
                        Исправление ошибок в системном реестре и восстановление исходных значений
                      </p>
                      <span class="internet-content__service-span">Цена за 1 единицу.</span>
                    </div>
                    <p class="internet-content__price-text">от 1820</p>
                  </div>
                  <div class="internet-content__item">
                    <div class="internet-content__item-box">
                      <p class="internet-content__service-text">
                        Настройка и оптимизация системного реестра Windows после очистки
                      </p>
                      <span class="internet-content__service-span">Цена за 1 единицу.</span>
                    </div>
                    <p class="internet-content__price-text">от 1370</p>
                  </div>
                </div>

                <div class="internet-content">
                  <p class="internet-content__text-title">Установка и настройка Windows</p>
                  <div class="internet-content__box-top">
                    <h6 class="internet-content__service-title">Услуга</h6>
                    <h6 class="internet-content__price-title">Цена,</h6>
                  </div>

                  <div class="internet-content__item">
                    <div class="internet-content__item-box">
                      <p class="internet-content__service-text">Настройка BIOS</p>
                      <span class="internet-content__service-span">
                        Выполняется обязательно при любых работах. Цена за 1 единицу. Настройка
                        режима работы устройств и портов, конфигурирование контроллеров.
                      </span>
                    </div>
                    <p class="internet-content__price-text">от 860</p>
                  </div>
                  <div class="internet-content__item">
                    <div class="internet-content__item-box">
                      <p class="internet-content__service-text">Форматирование разделов HDD</p>
                      <span class="internet-content__service-span">Проводится обязательно.</span>
                    </div>
                    <p class="internet-content__price-text">от 640</p>
                  </div>
                  <div class="internet-content__item">
                    <div class="internet-content__item-box">
                      <p class="internet-content__service-text">Создание разделов системы</p>
                      <span class="internet-content__service-span">
                        Если разделов нет, создание минимум одного обязательно.
                      </span>
                    </div>
                    <p class="internet-content__price-text">от 550</p>
                  </div>
                  <div class="internet-content__item">
                    <div class="internet-content__item-box">
                      <p class="internet-content__service-text">
                        Изменение типа файловой системы при переходе c Windows 8 на Windows 7
                      </p>
                      <span class="internet-content__service-span">
                        Изменение размера файловой системы
                      </span>
                    </div>
                    <p class="internet-content__price-text">от 740</p>
                  </div>
                  <div class="internet-content__item">
                    <div class="internet-content__item-box">
                      <p class="internet-content__service-text">
                        Настройка системного реестра и конфигурирование служб управления Windows
                      </p>
                      <span class="internet-content__service-span">Цена за 1 единицу.</span>
                    </div>
                    <p class="internet-content__price-text">от 820</p>
                  </div>
                  <div class="internet-content__item">
                    <div class="internet-content__item-box">
                      <p class="internet-content__service-text">
                        Стандартная настройка сложного системного программного обеспечения (системы
                        ПО)
                      </p>
                      <span class="internet-content__service-span">
                        С дистрибутива заказчика. С диска мастера цена от 690 Руб. <br />
                        Цена за 1 единицу.
                      </span>
                    </div>
                    <p class="internet-content__price-text">350</p>
                  </div>
                  <div class="internet-content__item">
                    <div class="internet-content__item-box">
                      <p class="internet-content__service-text">Установка драйверов</p>
                      <span class="internet-content__service-span">
                        Цена за 1 единицу. Цена за все 1890 Руб.
                      </span>
                    </div>
                    <p class="internet-content__price-text">680</p>
                  </div>
                  <div class="internet-content__item">
                    <div class="internet-content__item-box">
                      <p class="internet-content__service-text">
                        Настройка безопасности Интернет-браузера (при наличии доступа в интернет)
                      </p>
                      <span class="internet-content__service-span">
                        Цена за 1 единицу. Процедура является неотъемлемой частью защиты от вирусов,
                        т. к. большинство вирусов проникает именно через брауезер.
                      </span>
                    </div>
                    <p class="internet-content__price-text">760</p>
                  </div>
                  <div class="internet-content__item">
                    <div class="internet-content__item-box">
                      <p class="internet-content__service-text">
                        Установка комплексной антивирусной защиты компьютера freeware (файлового
                        антивируса, защиты от троянов, шпионских программ, червей и защиты
                        электронной почты)
                      </p>
                      <span class="internet-content__service-span">Цена за 1 единицу.</span>
                    </div>
                    <p class="internet-content__price-text">от 1350</p>
                  </div>
                  <div class="internet-content__item">
                    <div class="internet-content__item-box">
                      <p class="internet-content__service-text">
                        Обновление антивирусных баз и настройка антивируса на автоматическую работу
                      </p>
                      <span class="internet-content__service-span">Цена за 1 единицу.</span>
                    </div>
                    <p class="internet-content__price-text">от 870</p>
                  </div>
                </div>

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

export default InstallationPrograms;
