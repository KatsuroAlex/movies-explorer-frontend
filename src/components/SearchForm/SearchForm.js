import './SearchForm.css';
import React from 'react';

function SearchForm() {
  return (
    <div className='search-form'>
      <form className='search-form__form'>
        <input
          className='search-form__input'
          type='text'
          placeholder='Фильм'
          required
        />
        <button
          className='search-form__button'
          type='submit'
        >
          Найти
        </button>

        <div className='search-form__filter-box'>
          <p className='search-form__filter-name'>Короткометражки</p>
          <label className='search-form__radio-switcher'>
          <input className='search-form__radio-button search-form__radio-button_type_on'
              type='radio'
              value='on'
            />
            <input className='search-form__radio-button search-form__radio-button_type_off'
              type='radio'
              value='off'
            />
            <span className='search-form__switcher'></span>
          </label>
        </div>
      </form>
    </div>
  );
};
  
export default SearchForm;