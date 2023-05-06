import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import icon from "../../images/icon__COLOR_icon-main.svg";
import menuIcon from "../../images/icon__COLOR_icon-main.png"
import menuIconCross from "../../images/Group.svg"
import "./HeaderAuth.css";
import Navigation from "../Navigation/Navigation";

function HeaderAuth() {
  const [activeMenu, setActiveMenu] = useState(false);

  function handleActiveMenu() {
    setActiveMenu(!activeMenu);
  }

  return (
    <header className="header-auth">
      <div className="header-auth__container">
        <Link className="header-auth__link" to="/">
          <img className="header-auth__logo" src={logo} alt="Логотип" />
        </Link>
      </div>
      <div className="header-auth__container">
        <Navigation />
      </div>
      <div className="header-auth__container">
        <Link to="/profile" className="header-auth__account">
          <span className="header-auth__text">Аккаунт</span>
          <img className="header-auth__icon" alt="Аккаунт" src={icon}></img>
        </Link>
      </div>
      <div
        className={`header-auth__burger ${
          activeMenu ? "header-auth__burger_active" : ""
        }`}
        onClick={handleActiveMenu}
      >
        {activeMenu ? (
          <img
            className="header-auth__burger-menu-icon"
            src={menuIconCross}
            alt="Закрыть меню"
          />
        ) : (
          <img
            className="header-auth__burger-menu-icon"
            src={menuIcon}
            alt="Открыть меню"
          />
        )}
      </div>
      <div
        className={`header-auth__burger-menu-box ${
          activeMenu ? "header-auth__burger-menu-box_active" : ""
        }`}
        onClick={handleActiveMenu}
      >
        <div className="header-auth__burger-container">
          <nav className="header-auth__burger-navigation">
            <ul className="header-auth__burger-list">
              <li className="header-auth__burger-item">
                <Link className="header-auth__burger-link" to="/">
                  Главная
                </Link>
              </li>
              <li className="header-auth__burger-item">
                <Link className="header-auth__burger-link" to="/movies">
                  Фильмы
                </Link>
              </li>
              <li className="header-auth__burger-item">
                <Link className="header-auth__burger-link" to="/saved-movies">
                  Сохраненные фильмы
                </Link>
              </li>
            </ul>
          </nav>
          <div className="header-auth__burger-account">
            <Link to="/profile" className="header-auth__burger-account-link">
              <span className="header-auth__burger-text">Аккаунт</span>
              <img
                className="header-auth__burger-icon"
                alt="Аккаунт"
                src={icon}
              ></img>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
export default HeaderAuth;