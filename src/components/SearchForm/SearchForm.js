import './SearchForm.css';
import React, { useEffect } from 'react';
import { useFormValidation } from '../hooks/useFormValidation';


function SearchForm({ onSearchClick, savedMoviesPage, shortFilms, onCheckbox }) {

  const {values, errors, isValid, setValues, handleChange, setIsValid} = useFormValidation();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(values.query);
    onSearchClick(values.query);
  };

  useEffect(() => {
    if (!savedMoviesPage) {
      const input = localStorage.getItem('searchQuery');
      if (input) {
        setValues({query : input});
        setIsValid(true);
      }
    }
  }, [savedMoviesPage, setValues, setIsValid]);

  return (
    <div className='search-form'>
      <form className='search-form__form' onSubmit={handleSubmit}>
        <input
          className='search-form__input'
          type='text'
          placeholder='Фильм'
          name='query'
          value={values.query || ''}
          onChange={handleChange}
          required
        />
        <span id='email-error' className='search-form__error'>
          {errors.query ? 'Нужно ввести ключевое слово' : ''}
        </span>
        <button
          className='search-form__button'
          type='submit'
          disabled={!isValid}
        >
          Найти
        </button>

        <div className='search-form__filter-box'>
          <p className='search-form__filter-name'>Короткометражки</p>
          <label className={`search-form__radio-switcher
            ${shortFilms === 'on' ? 'search-form__radio-switcher_active' : null}`
          }>
            <input className='search-form__radio-button search-form__radio-button_type_on'
              type='radio'
              value='on'
              checked={shortFilms === 'on' ? true : false}
              onChange={onCheckbox}
            />
            <input className='search-form__radio-button search-form__radio-button_type_off'
              type='radio'
              value='off'
              checked={shortFilms === 'off' ? true : false}
              onChange={onCheckbox}
            />
            <span className='search-form__switcher'></span>
          </label>
        </div>
      </form>
    </div>
  );
};
  
export default SearchForm;