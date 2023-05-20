import './UserField.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { useFormValidation } from '../hooks/useFormValidation';

import picture from '../../images/logo.svg';

function UserField({
  type,
  linkTo,
  title,
  btnName,
  subtitle,
  linkName,
  onSubmit,
}) {
  const { values, errors, isValid, handleChange, validateForm } = useFormValidation();

  function handleSubmit(e) {
    e.preventDefault();
    validateForm();
    type === 'signup'
      ? onSubmit(values.name, values.email, values.password)
      : onSubmit(values.email, values.password);
  }

  return (
    <section className="user-field">
      <Link to="/" className="user-field__logo">
        <img className="user-field__logo-picture" src={picture} alt="Логотип" />
      </Link>
      <h2 className="user-field__title">{title}</h2>
      <form className="user-field__form" onSubmit={handleSubmit}>
        {type === 'signup' && (
          <label className="user-field__label">
            Имя
            <input
              id="name"
              type="text"
              className="user-field__input"
              name="name"
              minLength="2"
              maxLength="30"
              required
              value={values.name || ''}
              onChange={handleChange}
            />
            <span id="name-error" className="user-field__error">
              {errors.name ? 'Поле не может быть пустым' : ''}
            </span>
          </label>
        )}
        <label className="user-field__label">
          E-mail
          <input
            id="email"
            type="email"
            className="user-field__input"
            name="email"
            minLength="2"
            maxLength="30"
            value={values.email || ''}
            onChange={handleChange}
            required
            pattern="[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}"
          />
          <span id="email-error" className="user-field__error">
            {errors.email ? 'Поле должно содержать email в формате "email@email.ru"' : ''}
          </span>
        </label>
        <label className="user-field__label user-field__label_margin">
          Пароль
          <input
            id="password"
            type="password"
            className="user-field__input"
            name="password"
            minLength="4"
            maxLength="20"
            required
            value={values.password || ''}
            onChange={handleChange}
          />
          <span id="password-error" className="user-field__error">
            {errors.password ? 'Поле не может быть пустым и короче 4 символов' : ''}
          </span>
        </label>

        {type === 'signup' && (
          <button
            className="user-field__submit-btn"
            type="submit"
            disabled={!isValid}
          >
            {btnName}
          </button>
        )}
        {type === 'signin' && (
          <button
            className="user-field__submit-btn"
            type="submit"
            disabled={!isValid}
          >
            {btnName}
          </button>
        )}
        <p className="user-field__subtitle">
          {subtitle}
          <Link to={linkTo} className="user-field__link">
            {linkName}
          </Link>
        </p>
      </form>
    </section>
  );
}

export default UserField;
