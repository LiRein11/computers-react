import React from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import Footer from '../components/Footer';
import Header from '../components/Header';

const LaptopRepair = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />

      <main>
        <Breadcrumbs title={'Ремонт ноутбука'} />
        <section class="internet">
          <div class="container">
            <h3 class="internet__title title">Ремонт ноутбука</h3>
            <div class="internet__box">
              <div class="internet__box-content">
                <div class="internet-content">
                  <p class="internet-content__text-title">
                    Обязательные работы, проводимые при устранении аппаратных неисправностей
                  </p>
                  <div class="internet-content__box-top">
                    <h6 class="internet-content__service-title">Услуга</h6>
                    <h6 class="internet-content__price-title">Цена,</h6>
                  </div>

                  <div class="internet-content__item">
                    <div class="internet-content__item-box internet-content__item-box--active">
                      <p class="internet-content__service-text">Разборка ноутбука</p>
                      <span class="internet-content__service-span">
                        Цена зависит от сложности работы.
                      </span>
                    </div>
                    <p class="internet-content__price-text">от 890</p>
                  </div>
                  <div class="internet-content__item">
                    <div class="internet-content__item-box internet-content__item-box--active">
                      <p class="internet-content__service-text">
                        Подбор подходящих комплектующих для замены и проверка их на совместимость
                      </p>
                      <span class="internet-content__service-span">
                        Если требуется. Цена за 1 единицу.
                      </span>
                    </div>
                    <p class="internet-content__price-text">от 1360</p>
                  </div>
                  <div class="internet-content__item">
                    <div class="internet-content__item-box internet-content__item-box--active">
                      <p class="internet-content__service-text">
                        Замена материнской платы после проведения диагностики нашим мастером
                      </p>
                      <span class="internet-content__service-span">
                        Если требуется. Цена за 1 единицу.
                      </span>
                    </div>
                    <p class="internet-content__price-text">2680</p>
                  </div>
                  <div class="internet-content__item">
                    <div class="internet-content__item-box internet-content__item-box--active">
                      <p class="internet-content__service-text">
                        Замена комплектующих после проведения диагностики нашим мастером
                      </p>
                      <span class="internet-content__service-span">
                        Если требуется. Цена за 1 единицу.
                      </span>
                    </div>
                    <p class="internet-content__price-text">1240</p>
                  </div>
                  <div class="internet-content__item">
                    <div class="internet-content__item-box internet-content__item-box--active">
                      <p class="internet-content__service-text">Настройка BIOS</p>
                      <span class="internet-content__service-span">
                        При решении аппаратных проблем выполняется обязательно. Цена за 1 единицу.
                        Настройка режима работы контроллеров, систем охлаждения, питания,
                        энергопотребления.
                      </span>
                    </div>
                    <p class="internet-content__price-text">от 860</p>
                  </div>
                  <div class="internet-content__item">
                    <div class="internet-content__item-box internet-content__item-box--active">
                      <p class="internet-content__service-text">Замена термопасты</p>
                      <span class="internet-content__service-span">
                        Защищает процессор от перегрева, выполняется обязательно. <br />
                        Цена за 1 единицу.
                      </span>
                    </div>
                    <p class="internet-content__price-text">520</p>
                  </div>
                  <div class="internet-content__item">
                    <div class="internet-content__item-box internet-content__item-box--active">
                      <p class="internet-content__service-text">Профилактика систем охлаждения</p>
                      <span class="internet-content__service-span">
                        Защищает от перегрева и значительно продляет срок службы оборудования. При
                        аппаратных не исправностях выполняется обязательно. <br />
                        Цена за 1 единицу.
                      </span>
                    </div>
                    <p class="internet-content__price-text">от 940</p>
                  </div>
                  <div class="internet-content__item">
                    <div class="internet-content__item-box internet-content__item-box--active">
                      <p class="internet-content__service-text">
                        Профилактика плат. узлов и разъемов на окисление металла контактов
                      </p>
                      <span class="internet-content__service-span">
                        Со временем металл окисляется и часто вызывает выход из строя отдельных
                        компонентов или всего системного блока. Своевременная профилактика помогает
                        этого избежать и продлить срок службы оборудования. При аппаратных
                        неисправностях выполняется обязательно.
                      </span>
                    </div>
                    <p class="internet-content__price-text">от 930</p>
                  </div>
                  <div class="internet-content__item">
                    <div class="internet-content__item-box internet-content__item-box--active">
                      <p class="internet-content__service-text">Сборка корпуса</p>
                      <span class="internet-content__service-span">
                        Сборка корпуса выполняется после ремонта. Цена зависит от сложности.
                      </span>
                    </div>
                    <p class="internet-content__price-text">от 760</p>
                  </div>
                  <div class="internet-content__item">
                    <div class="internet-content__item-box internet-content__item-box--active">
                      <p class="internet-content__service-text">
                        Устранение аппаратной неисправности
                      </p>
                      <span class="internet-content__service-span">
                        Если требуется. Цена за 1 единицу.
                      </span>
                    </div>
                    <p class="internet-content__price-text">от 3420</p>
                  </div>
                  <div class="internet-content__item">
                    <div class="internet-content__item-box internet-content__item-box--active">
                      <p class="internet-content__service-text">Перепрошивка BIOS</p>
                      <span class="internet-content__service-span">
                        Если требуется. Цена зависит от сложности и производителя. Цена за 1
                        единицу.
                      </span>
                    </div>
                    <p class="internet-content__price-text">от 1400</p>
                  </div>
                </div>
                <p class="internet-content__text">
                  В случае, если клиент отказывается хотя бы от одной из обязательных работ,
                  проводимых при устранении аппаратных неисправностей, то гарантия на всю сделанную
                  работу не предоставляется*
                </p>

                <div class="internet-content">
                  <p class="internet-content__text-title">Восстановление данных</p>
                  <div class="internet-content__box-top">
                    <h6 class="internet-content__service-title">Услуга</h6>
                    <h6 class="internet-content__price-title">Цена,</h6>
                  </div>

                  <div class="internet-content__item">
                    <div class="internet-content__item-box internet-content__item-box--active">
                      <p class="internet-content__service-text">
                        Восстановление данных путем быстрого поверхностного сканирования
                      </p>
                      <span class="internet-content__service-span">
                        До 5 Мин. и до 1Гб. Цена за 1 единицу.
                      </span>
                    </div>
                    <p class="internet-content__price-text">320</p>
                  </div>
                  <div class="internet-content__item">
                    <div class="internet-content__item-box internet-content__item-box--active">
                      <p class="internet-content__service-text">
                        Восстановление данных путем стандартного сканирования
                      </p>
                      <span class="internet-content__service-span">Цена за 1 единицу.</span>
                    </div>
                    <p class="internet-content__price-text">от 1460</p>
                  </div>
                  <div class="internet-content__item">
                    <div class="internet-content__item-box internet-content__item-box--active">
                      <p class="internet-content__service-text">
                        Восстановление данных путем глубокого расширенного сканирования
                      </p>
                      <span class="internet-content__service-span">
                        Или восстановление баз данных. С анализом структуры файловой системы или
                        выявления ее исходного размера. <br />
                        Цена за 1 единицу.
                      </span>
                    </div>
                    <p class="internet-content__price-text">от 3680</p>
                  </div>
                  <div class="internet-content__item">
                    <div class="internet-content__item-box internet-content__item-box--active">
                      <p class="internet-content__service-text">
                        Восстановление данных после программного сбоя или повреждения файловой
                        системы
                      </p>
                      <span class="internet-content__service-span">Цена за 1 единицу.</span>
                    </div>
                    <p class="internet-content__price-text">от 5760</p>
                  </div>
                  <div class="internet-content__item">
                    <div class="internet-content__item-box internet-content__item-box--active">
                      <p class="internet-content__service-text">
                        Восстановление данных после аппаратного сбоя
                      </p>
                      <span class="internet-content__service-span">
                        При появлении BAD-блоков, физических повреждениях носителя информации, выход
                        из строя IDE/SATA контроллера. <br />
                        Цена за 1 единицу.
                      </span>
                    </div>
                    <p class="internet-content__price-text">от 8370</p>
                  </div>
                  <div class="internet-content__item">
                    <div class="internet-content__item-box internet-content__item-box--active">
                      <p class="internet-content__service-text">
                        Сохранение или перенос восстановленных данных
                      </p>
                      <span class="internet-content__service-span">
                        Сохранение или перенос восстановленных данных, после их восстановления, за
                        1Гб.
                      </span>
                    </div>
                    <p class="internet-content__price-text">300</p>
                  </div>
                </div>

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

export default LaptopRepair;
