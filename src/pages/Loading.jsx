import React from 'react';
import { Link } from 'react-router-dom';
import HeaderCall from '../components/HeaderCall';

const Loading = () => {
  return (
    <>
      <HeaderCall />

      <main>
        <section
          class="loading"
          style={{ backgroundImage: "url('../images/loading/loading-bg.jpg')" }}>
          <div class="container">
            <h3 class="title">Загрузка отзыва</h3>
            <progress value="33" max="100" class="loading__progress"></progress>
            <span class="loading__span">100%</span>
            <button class="loading__btn">Отправить</button>
            <p class="loading__text">
              Нажимая на кнопку «Отправить», вы даёте согласие на <br />
              <Link className="personal-data" to="/politics">
                обработку персональных данных
              </Link>
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default Loading;