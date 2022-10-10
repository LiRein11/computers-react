import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const HeaderCall = () => {
   const navigate = useNavigate();

  return (
    <header class="header-call">
      <div class="container">
        <div class="header-call__content">
          <Link class="logo" to="/">
            <img class="logo__img" src="images/logo.jpg" alt="logo" />
          </Link>
          <Link class="header-call__content-back" to={navigate(-1)}>
            <svg
              class=""
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="26"
              viewBox="0 0 17 26">
              <image
                id="Направление"
                width="17"
                height="26"
                xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAaCAYAAABRqrc5AAABvElEQVQ4jZ3Uy6uNYRTH8c92OU5te+LUdogBSspRQrmM5DKQIpkZUiQhKQMDlLnbSPwNCpkIMXFJQkm5hglFkXsudbTqeevt6T3vfrffaO9fe33Xfn7Pelar2+3qUwPYhKMYwsF+IR3si0JMSt7bCX0ApuIYtmT+y6aQEZzFssy/h13jehS3sBFXKgAXsAGP6iBtHMB5DJf87ziOzXgXxljHmYbD2JH5UXQEZ8pmFWQ+TmBN5j/GXlzLC3LIepzEnMy/ju14UfW3y5nsxrkKwOkErwQUkE66/1OlAQp9xh7sxM+xAMVx4vxbMz+67sfFuuJCMfajmRfBbcObJgBZJv+t8e12eyYWlQCzU5Cv8awJOCBxfYNYXvLjia/DD9xtAvmNy/iIVaXZGUyg4ZTT3zpI8Tk6PsBSTCn9ZglW4CY+9YKEnqeuc1M2hWZhNZ7gVS9I6AOupiFcXPJjBa7FV9zvBQl9S+/lS/YQOym3odRotA4S+oNbeIiVmJz8gbSgFuJGNKyDFIoc4vZilmYkMzbevAS/0wQSeo9LmI4FJT++jzSFhGItxq79lQazmKeJ/UBCMZi38TRl0sKhf258UwlrZO0pAAAAAElFTkSuQmCC"
              />
            </svg>
            <p class="header-call__content-link">Назад</p>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default HeaderCall;