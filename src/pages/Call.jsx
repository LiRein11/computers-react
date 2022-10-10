import React from 'react';
import { Link } from 'react-router-dom';
import HeaderCall from '../components/HeaderCall';

const Call = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HeaderCall />
      <main>
        <section class="call">
          <div class="container">
            <h3 class="title">Вызвать мастера</h3>
            <form
              class="call-form"
              style={{ backgroundImage: "url('../images/call/call-bg.jpg')" }}>
              <input class="call-form__input" placeholder="Имя" type="text" />
              <input class="call-form__input" placeholder="Телефон" type="text" />
              <input class="call-form__input" placeholder="Эл. почта" type="text" />
              <textarea class="call-form__textarea" placeholder="Комментарий"></textarea>
              <button class="call-form__btn" type="submit">
                Отправить
              </button>
              <p class="call-form__text">
                Нажимая на кнопку «Отправить», вы даёте согласие на <br />
                <Link className="personal-data" to="/politics">
                  обработку персональных данных
                </Link>
              </p>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};

export default Call;