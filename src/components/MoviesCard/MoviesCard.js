import './MoviesCard.css';
import image from "../../images/pic__COLOR_pic.png"

function MoviesCard() {
  return (
    <section className='movie-block'>
      <div className='movie-block__header'>
        <div className='movie-block__info'>
          <h2 className='movie-block__title'>Фильм</h2>
          <p className='movie-block__timelapse'>1ч 47мин</p>
        </div>
        <button
          className='movie-block__button movie-block__button_type_save-button'
          type='button'
        />
      </div>
      <a className='movie-block__link' 
        href="/movies"
        target="_blank"
        rel="noopener noreferrer">
        <img className='movie-block__picture' src={image} alt='Фильм'/>
      </a>
    </section>
  );
};
  
export default MoviesCard;
