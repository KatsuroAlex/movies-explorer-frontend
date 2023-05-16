import React, { useState, useEffect} from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import * as moviesApi from  '../../utils/MoviesApi';
import { filterShortMovies, filterMovies } from '../hooks/FilterMovies';

function Movies({ onLikeClick, savedMoviesList, onDeleteClick }) {
  const forCheckbox = localStorage.getItem('shortFilms') === 'on' ? 'on' : 'off';

  const [shortFilms, setShortFilms] = useState(forCheckbox);
  const [isError, setIsError] = useState(false);
  const [moviesFilter, setMoviesFilter] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [allMovies, setAllMovies] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const [moviesLoaging, setMoviesLoaging] = useState(false);

  function filterMoviesAndSetState (movies, query, checkbox) {
    const moviesList = filterMovies(movies, query);
    setMoviesFilter(checkbox === 'on' ? filterShortMovies(moviesList) : moviesList);
    localStorage.setItem('movies', JSON.stringify(moviesList));
  }

  function updateMoviesWithUrls(movies) {
    movies.forEach(movie => {
        movie.thumbnail = `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`
        movie.image = `https://api.nomoreparties.co${movie.image.url}`
    });
  };

  function handleSubmitForm(value) {
    setMoviesLoaging(true);
    setSearchQuery(value);
    localStorage.setItem('searchQuery', value);
    localStorage.setItem('shortFilms', shortFilms);
    
    if (!allMovies.length) {
      moviesApi.getMovies()
        .then((data) => {
          updateMoviesWithUrls(data);
          setAllMovies(data);
          filterMoviesAndSetState(data, value, shortFilms);
        })
        .catch((err) => {
          setIsError(true);
          console.log(err);
        })
        .finally(() => setMoviesLoaging(false))
    } else {
      filterMoviesAndSetState(allMovies, value, shortFilms);
      setMoviesLoaging(false);
    }
  }

  function handleCheckFilteredMovies(arr) {
    arr.length === 0 ? setNotFound(true) : setNotFound(false);
	}

  function handleSwitcher(e) {
    setShortFilms(e.target.value);
    localStorage.setItem('shortFilms', e.target.value);
	}

  useEffect(() => {
    const item = JSON.parse(localStorage.getItem('movies'));
    if (item && !searchQuery) {
      setShortFilms(localStorage.getItem('shortFilms'));
      setMoviesFilter(shortFilms === 'on' ? filterShortMovies(item) : item);
      handleCheckFilteredMovies(item);
    }
  }, [shortFilms, searchQuery])

  useEffect(() => {
    if (searchQuery) {
      const arr = filterMovies(allMovies, searchQuery, shortFilms);
      setMoviesFilter(arr);
      handleCheckFilteredMovies(arr);
    }
  }, [searchQuery, shortFilms, allMovies])


  return (
    <div className="movies">
      <div className="movies__container">
      <SearchForm 
        onSearchClick={handleSubmitForm}
        onCheckbox={handleSwitcher}
        shortFilms={shortFilms}
      />
      <MoviesCardList 
        isLoading={moviesLoaging}
        list={moviesFilter}
        isEmptyList={notFound}
        isError={isError}
        onLike={onLikeClick}
        onDelete={onDeleteClick}
        savedMovies={savedMoviesList}/>
      </div>
    </div>
  );
}

export default Movies;
