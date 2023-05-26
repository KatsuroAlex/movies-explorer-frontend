import './Profile.css';
import React from 'react';

function Profile() {

  return (
    <section className='profile'>
      <div className='profile__box'>
        <h2 className='profile__title'>Привет, Виталий!</h2>
        <form className='profile__form'>
          <label className='profile__item'>Имя
            <input
              type='text'
              className='profile__input'
              name='name'
              minLength='2'
              maxLength='30'
              required
            />
            <span id="name-error" className='profile__error'>
            </span>
          </label>
          <label className='profile__item'>Email
            <input
              type='email'
              className='profile__input'
              name='email'
              minLength='2'
              maxLength='30'
              required
            />
            <span id='email-error' className='profile__error'>
            </span>
          </label>

            <button
              className='profile__button profile__button_type_change-data'
              type='button'
            >
              Редактировать
            </button>
            <button
              className='profile__button profile__button_type_logout'
              type='button'
            >
              Выйти из аккаунта
            </button>                      
        </form>
      </div>
      
    </section>
  );
};
  
export default Profile;

