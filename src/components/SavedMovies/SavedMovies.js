import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import React from 'react';


function SavedMovies() {

  return (
    <section className='saved-movies'>
      <SearchForm />
      <MoviesCardList />
    </section>
  );
};
  
export default SavedMovies;