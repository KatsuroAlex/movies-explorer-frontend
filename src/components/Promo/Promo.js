import React from "react";
import './Promo.css';
import image from "../../images/main_logo.svg"

function Promo() {

  return (
    <section className='promo'>
        <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
        <img className="promo__logo" src={image} alt="Логотип"></img>
      <nav className='navigation'>
        <ul className='navigation__list'>
          <li className='navigation__item'>
            <a className='navigation__link' href='#project'>О проекте</a>
          </li>
          <li className='navigation__item'>
            <a className='navigation__link' href='#techs'>Технологии</a>
          </li>
          <li className='navigation__item'>
            <a className='navigation__link' href='#student'>Студент</a>
          </li>
        </ul>
      </nav>
    </section>
  );
};
  
export default Promo;
