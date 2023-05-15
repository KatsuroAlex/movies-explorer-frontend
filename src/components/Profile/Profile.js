import './Profile.css';
import React, { useContext, useState, useEffect } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { useFormValidation } from '../hooks/useFormValidation';


function Profile({ onSignOut, editProfile }) {

  const currentUser = useContext(CurrentUserContext);
  const {values, errors, isValid, handleChange, setValues, setIsValid} = useFormValidation();
  const [activeInput, setActiveInput] = useState(false);

  useEffect(() => {
    if (currentUser) {
      setValues({
        name: currentUser.name,
        email: currentUser.email,
      });
    }
  }, [setValues, currentUser]); 

  useEffect(() => {
    if (currentUser.name === values.name && currentUser.email === values.email) {
      setIsValid(false);
    }
  }, [setIsValid, values, currentUser]);

  function handleSubmit(e) {
    e.preventDefault();
    editProfile(values.name, values.email);
  };

  function handleUnlockInput() {
    setActiveInput(true);
  };

  return (
    <section className='profile'>
      <div className='profile__box'>
        <h2 className='profile__title'>{`Привет, ${currentUser.name}!`}</h2>
        <form className='profile__form' onSubmit={handleSubmit}>
          <label className='profile__item'>Имя
            <input
              value={values.name || ''}
              onChange={handleChange}
              type='text'
              className='profile__input'
              name='name'
              minLength='2'
              maxLength='30'
              title='Поле не может быть пустым '
              required
              id='name'
            />
            <span id="name-error" className='profile__error'>
              {errors.name ? 'Поле не может быть пустым' : ''}
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
              value={values.email || ''}
              onChange={handleChange}
              id='email'
            />
            <span id='email-error' className='profile__error'>
              {errors.email ? 'Поле не может быть пустым и должно содержать email' : ''}
            </span>
          </label>

          {activeInput ? (
            <>
            <button
              className='profile__button profile__button_type_change-data'
              type='submit'
              onClick={handleUnlockInput}
              disabled={!isValid }
            >
              Редактировать
            </button>
            <button
                className='profile__button profile__button_type_logout'
                type='button'
                onClick={onSignOut}
              >
                Выйти из аккаунта
              </button> 
            </>
          ) : (
            <>
              <button
                className='profile__button profile__button_type_change-data'
                type='submit'
                onClick={handleUnlockInput}
              >
                Редактировать
              </button>
              <button
                className='profile__button profile__button_type_logout'
                type='button'
                onClick={onSignOut}
              >
                Выйти из аккаунта
              </button>  
            </>  
          )}                  
        </form>
      </div>
      
    </section>
  );
};
  
export default Profile;