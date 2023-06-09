import React from "react";
import profilePhoto from "../../images/photo.png";
import "./AboutMe.css";

function AboutMe() {
  return (
    <div className="about-me" id="student">
      <h2 className="about-me__title">
        Студент
      </h2>
      <div className="about-me__container">
        <div className="about-me__box">
          <h3 className="about-me__text-title">Виталий</h3>
          <p className="about-me__text-subtitle">
            Фронтенд-разработчик, 30 лет
          </p>
          <p className="about-me__text-description">
          Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
          и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. 
          С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, 
          начал заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <ul className="about-me__list">
            <li className="about-me__item">
              <a className="about-me__link" 
                href="https://github.com/KatsuroAlex" 
                target="_blank"
                rel="noopener noreferrer">
                Github
              </a>
            </li>
          </ul>
        </div>
        <img
          className="about-me__profile-photo"
          src={profilePhoto}
          alt="Фото"
        />
      </div>
    </div>
  );
}

export default AboutMe;
