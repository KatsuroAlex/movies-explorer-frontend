import React from "react";
import './PageNotFound.css';
import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();
  return (
    <section className='page-notfound'>
      <div className='page-notfound__text'>
        <h2 className='page-notfound__title'>404</h2>
        <p className='page-notfound__subtitle'>Страница не найдена</p>
      </div>
      <p className='page-notfound__link' onClick={() => navigate(-1)}>Назад</p>
    </section>
  );
};
  
export default PageNotFound;