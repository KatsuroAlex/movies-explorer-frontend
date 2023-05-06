import './PageNotFound.css';

function PageNotFound() {

  return (
    <section className='page-notfound'>
      <div className='page-notfound__text'>
        <h2 className='page-notfound__title'>404</h2>
        <p className='page-notfound__subtitle'>Страница не найдена</p>
      </div>
      <p className='page-notfound__link'>Назад</p>
    </section>
  );
};
  
export default PageNotFound;