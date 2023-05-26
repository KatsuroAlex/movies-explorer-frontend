import './UserField.css';
import { Link } from 'react-router-dom';
import picture from '../../images/logo.svg';
import React from 'react';

function UserField({
  type,
  linkTo,
  title,
  btnName,
  subtitle,
  linkName,
  }) {

  return (
    <section className='user-field'>
      <Link to='/' className='user-field__logo'>
        <img className='user-field__logo-picture' src={picture} alt='Логотип' />
      </Link>
      <h2 className='user-field__title'>{title}</h2>
      <form className='user-field__form' >
        {type === 'signup' && (
          <label className='user-field__label'>Имя
            <input
              type='text'
              className='user-field__input'
              name='name'
              minLength='2'
              maxLength='30'
              required
            />
            <span id='name-error' className='user-field__error'></span>
            </label>
        )}
        <label className='user-field__label'>E-mail
          <input
            type='email'
            className='user-field__input'
            name='email'
            minLength='2'
            maxLength='30'
            required
          />
          <span id='email-error' className='user-field__error'></span>
        </label>
        <label className='user-field__label user-field__label_margin'>Пароль
          <input
            type='password'
            className='user-field__input'
            name='password'
            minLength='4'
            maxLength='20'
            required
          />
          <span className='user-field__error'></span>
        </label>

        {type === 'signup' && (
          <button
            className='user-field__submit-btn'
            type='submit'
          >
            {btnName}
          </button>
        )}
        {type === 'signin' && (
          <button
            className='user-field__submit-btnn'
            type='submit'
          >
            {btnName}
          </button>
        )}



        {/* <button
          className='user-field__submit-btn'
          type='submit'
        >
          {btnName}
        </button> */}
        <p className='user-field__subtitle'>{subtitle}
          <Link to={linkTo} className='user-field__link'>{linkName}</Link>
        </p>
      </form>
    </section>
  );
};
  
export default UserField;