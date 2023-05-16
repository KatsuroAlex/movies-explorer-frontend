import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import React, { useEffect, useState } from 'react';
import { filterMovies } from '../hooks/FilterMovies';

function SavedMovies({ list, onDeleteClick, isError }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [shortFilms, setShortFilms] = useState('off');
  const [filteredMovies, setFilteredMovies] = useState(list);
  const [notFound, setIsNotFound] = useState(false);
  
  function handleSubmit(value) {
    setSearchQuery(value);
    const resultList = filterMovies(list, searchQuery, shortFilms);
    setFilteredMovies(resultList);
  };

  function handleSwitcher(e) {
    setShortFilms(e.target.value);
  };

  useEffect(() => {
    const resultList = filterMovies(list, searchQuery, shortFilms);
    setFilteredMovies(resultList);
    if (searchQuery) {
      resultList.length === 0 ? setIsNotFound(true) : setIsNotFound(false);
    }
  }, [searchQuery, shortFilms, list]);

  return (
    <section className='saved-movies'>
      <SearchForm 
        onSearchClick={handleSubmit}
        onCheckbox={handleSwitcher}
        savedMoviesPage={true}
        shortFilms={shortFilms}
      />
      <MoviesCardList 
        list={filteredMovies}
        onDelete={onDeleteClick}
        isEmptyList={notFound}
        savedMoviesPage={true}
        isError={isError}/>
    </section>
  );
};
  
export default SavedMovies;