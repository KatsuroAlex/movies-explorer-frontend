import "./MoviesCardList.css";
import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList() {

  return (
    <section className="movies__card-list">
        <ul className="movies__list">
          <MoviesCard/>
          <MoviesCard/>
          <MoviesCard/>
          <MoviesCard/>
          <MoviesCard/>
          <MoviesCard/>
          <MoviesCard/>
          <MoviesCard/>
          <MoviesCard/>
          <MoviesCard/>
          <MoviesCard/>
          <MoviesCard/>
        </ul>
        <button className="movies__add-button" >
          Еще
        </button>
    </section>
  );
}

export default MoviesCardList;
