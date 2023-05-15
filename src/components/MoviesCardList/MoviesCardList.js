import "./MoviesCardList.css";
import React, { useEffect, useState, useCallback } from 'react';
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from '../Preloader/Preloader';

function MoviesCardList({  
  isLoading,
  list,
  isEmptyList,
  isError,
  onLike,
  onDelete,
  savedMovies,
  savedMoviesPage
}) {
  const width = useWindowSize();
  const [showList, setShowList] = useState([]);
  const [cardSize, setCardsSize] = useState({sum: 0, more: 0});
  const [isMount, setIsMount] = useState(true);

  function useWindowSize() {
    const getWindowWidth = useCallback(() => window.innerWidth, []);
    const [windowWidth, setWindowWidth] = useState(getWindowWidth());
  
    useEffect(() => {
      function handleResize() {
        setWindowWidth(getWindowWidth());
      };
      window.addEventListener('resize', handleChangeSize, false);
      let resizeTimeout;
      function handleChangeSize() {
        if (!resizeTimeout) {
          resizeTimeout = setTimeout(() => {
            resizeTimeout = null;
            handleResize();
          }, 1000);
        }
      };
      return () => window.removeEventListener('resize', handleResize);
    }, [getWindowWidth]);
    return windowWidth;
  };

  useEffect(() => {
    if (width > 1280){
      setCardsSize({sum: 8, more: 4});
    } else if(width <= 1280 && width > 1025){
      setCardsSize({ sum: 12, more: 3});
    } else if (width <=1025 && width > 630){
      setCardsSize({sum: 8, more: 2});
    } else if (width <= 630){
      setCardsSize({sum: 5, more: 2});
    }
    return () => setIsMount(false);  
  }, [width, isMount]);

  // установка массива карточек по роуту /movies
  useEffect(() => {
    if(list.length && !savedMoviesPage){
      const res = list.filter((item, index) => index < cardSize.sum);
      setShowList(res);
    }
  }, [list, savedMoviesPage, cardSize.sum]);

  function handleClickShowMoreMovies () {
    const startIndex = showList.length;
    const endIndex = startIndex + cardSize.more;
    const remainingItems = list.length - startIndex;

    if(remainingItems > 0){
      const newCards = list.slice(startIndex, endIndex);
      setShowList([...showList, ...newCards]);
    }
  };

  //отображение избранных фильмов
  function getSavedMoviesPage() {
    return list.map((item) => (
      <MoviesCard
        key={item._id}
        card={item}
        savedPage={savedMoviesPage}
        onDelete={onDelete}
      />
    ))
  };

  //получаем сохраненную ячейку фильма
  function getSavedMovieItem(arr, id) {
    return arr.find((item) => {
      return item.movieId === id;
    })
  };

  //создаем массив карточек
  function getInitialMoviesPage() {
    return showList.map((item) => {
      console.log(item);
      const likedMovieCard = getSavedMovieItem(savedMovies, item.id);
      const likedMovieId = likedMovieCard ? likedMovieCard._id : null;
      return (
        <MoviesCard
          key={item.id}
          card={{ ...item, _id: likedMovieId }}
          onLike={onLike}
          onDelete={onDelete}
          liked={likedMovieCard ? true : false}
        />)
    })
  };

  return (
    <section className="movies-card">
      {isLoading ? (
        <Preloader />
      ) : (
        isEmptyList || isError ? (
          <p className={`movies-card__message ${isError && 'movies-card__message_type_err'}`}>
            {isError ? "" : 'Ничего не найдено'}
          </p>
        ) : (
          <>
            <div className='movies-card__box'>
              {savedMoviesPage ? getSavedMoviesPage() : getInitialMoviesPage()}
            </div>

              <button
              className={`movies-card__more-button 
                ${(savedMoviesPage || isEmptyList || showList.length === list.length) &&
                'movies-card__more-button_hidden'}`
              }
              type='button'
              aria-label='Показать еще'
              onClick={handleClickShowMoreMovies}
            >
              Ещё
            </button>

          </>
        )
      )}
    </section>
  );
}

export default MoviesCardList;