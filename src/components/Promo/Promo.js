import React from "react";
import './Promo.css';
import image from "../../images/main_logo.svg"

function Promo() {

  return (
    <section className='promo'>
        <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
        <img className="promo__logo" src={image} alt="Логотип"></img>
      <nav className='promo__navigation'>
        <ul className='promo__navigation-list'>
          <li className='promo__navigation-item'>
            <a className='promo__navigation-link' href='#project'>О проекте</a>
          </li>
          <li className='promo__navigation-item'>
            <a className='promo__navigation-link' href='#techs'>Технологии</a>
          </li>
          <li className='promo__navigation-item'>
            <a className='promo__navigation-link' href='#student'>Студент</a>
          </li>
        </ul>
      </nav>
    </section>
  );
};
  
export default Promo;
