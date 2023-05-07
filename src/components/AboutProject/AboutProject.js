import React from "react";
import "./AboutProject.css";

function AboutProject() {
  return (
    <div className="about-project" id="project">
      <h2 className="about-project__title">О проекте</h2>
      <ul className="about-project__info">
        <li className="about-project__info-item">
          <h3 className="about-project__info-title">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about-project__info-content">
            Составление плана, работу над бэкендом, верстку, добавление 
            функциональности и финальные доработки.
          </p>
        </li>
        <li className="about-project__info-item">
          <h3 className="about-project__info-title">На выполнение диплома ушло 5 недель</h3>
          <p className="about-project__info-content about-project__info-content_type_last">
            У каждого этапа был мягкий и жесткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
          </p>
        </li>
      </ul>
      <ul className="about-project__time">
        <li className="about-project__time-item">
          <p className="about-project__time-title about-project__time-title_type_backend">
            1 неделя
          </p>
          <p className="about-project__time-subtitle">Back-end</p>
        </li>
        <li className="about-project__time-item">
          <p className="about-project__time-title">4 недели</p>
          <p className="about-project__time-subtitle">Front-end</p>
        </li>
      </ul>
    </div>
  );
}

export default AboutProject;
