import './MoviesCard.css';

function MoviesCard({ card, onLike, onDelete, liked, savedPage }) {

  function getTime(mins) {
    const hours = Math.trunc(mins/60);
    const minutes = mins % 60;
    return `${hours}ч ${minutes}м`;
  };

  function handleSetLike() {
    onLike(card);
  };
  
  function handleUnlike() {
    onDelete(card);
  };

  return (
    <section className='movie-block'>
      <div className='movie-block__header'>
        <div className='movie-block__info'>
          <h2 className='movie-block__title'>{card.nameRU}</h2>
          <p className='movie-block__timelapse'>{getTime(card.duration)}</p>
        </div>
        <button
          className={`movie-block__button
          ${savedPage ? 'movie-block__button_type_delete-button' : 'movie-block__button_type_save-button'} 
          ${liked && !savedPage ? 'movie-block__save-button_active' : ''}`}
          type='button'
          aria-label='Сохранить в избранное'
          onClick={savedPage || liked ? handleUnlike : handleSetLike}
        />
      </div>
      <a className='movie-block__link'
        href={card.trailer || card.trailerLink}
        target="_blank"
        rel="noopener noreferrer">
        <img className='movie-block__picture' src={`${card.image}`} alt='Фильм'/>
      </a>
    </section>
  );
};
  
export default MoviesCard;
