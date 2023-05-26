import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navigation-movies">
      <ul className="navigation-movies__list">
        <li className="navigation-movies__list-item">
          <Link className="navigation-movies__link" to="/movies">
            Фильмы
          </Link>
        </li>
        <li className="navigation-movies__list-item">
          <Link className="navigation-movies__link" to="/saved-movies">
            Сохраненные фильмы
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;