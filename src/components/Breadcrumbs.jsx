import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Breadcrumbs = ({title}) => {
  const navigate = useNavigate();

  return (
    <section class="top">
      <div class="container">
        <div class="breadcrumbs">
          <ul class="breadcrumbs__list">
            <li class="breadcrumbs__item">
              <Link class="breadcrumbs__link" onClick={() => navigate(-1)}>
                Услуги
              </Link>
            </li>
            <li class="breadcrumbs__item">
              <a class="breadcrumbs__link" href="#">
                {title}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumbs;