import React from "react";
import "./Portfolio.css";
import icon from "../../images/arrow.svg";

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__item">
          <a
            className="portfolio__link"
            href="https://github.com/KatsuroAlex?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="portfolio__subtitle">Статичный сайт</p>
            <img className="portfolio__icon" src={icon} alt="Стрелка" />
          </a>
        </li>
        <li className="portfolio__item">
          <a
            className="portfolio__link"
            href="https://github.com/KatsuroAlex/russian-travel"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="portfolio__subtitle">Адаптивный сайт</p>
            <img className="portfolio__icon" src={icon} alt="Стрелка" />
          </a>
        </li>
        <li className="portfolio__item">
          <a
            className="portfolio__link"
            href="https://github.com/KatsuroAlex/react-mesto-api-full-gha"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="portfolio__subtitle">Одностраничное приложение</p>
            <img className="portfolio__icon" src={icon} alt="Стрелка" />
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
