import React from 'react';
import { Link } from 'react-router-dom';
import HeaderCall from '../components/HeaderCall';

const Review = () => {
  return (
    <>
      <HeaderCall/>
  <main>
    <section class="review">
      <div class="container">
        <h3 class="title">
          Оставить отзыв
        </h3>
        <form class="review-form" style={{backgroundImage: "url('../images/call/call-bg.jpg')"}}>
          <input class="review-form__input" placeholder="Имя" type="text"/>
          <input class="review-form__input" placeholder="Эл. почта" type="text"/>
          <input class="review-form__input review-form__input--active" placeholder="Адрес в соц. сети" type="text"/>
          <div class="review__box-text">
            <p class="review__text review__text--one">
              Этот пункт нужно заполнить, для того, чтобы другие люди
              убедились в подленности отзыва. И могли спросить о нём
              у вас напрямую.
            </p>
            <p class="review__text review__text--two">
              Вы можете ввести ссылку на свой профиль. На любой из
              перечисленных соцсетей: «Вконтакте», «Одноклассники»,
              «Facebook», «Instagram».
            </p>
          </div>
          <textarea class="review-form__textarea" placeholder="Отзыв"></textarea>
          <button class="review-form__btn" type="submit">Отправить</button>
          <p class="review-form__text">
            Нажимая на кнопку «Отправить», вы даёте
            согласие на <br/> <Link className="personal-data" to="/politics">
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

export default Review;