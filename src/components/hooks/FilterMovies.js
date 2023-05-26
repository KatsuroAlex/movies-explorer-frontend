export const filterShortMovies = (movies) => movies.filter((movie) => movie.duration < 40);

export const filterMovies = (movies, searchQuery, shortFilms) => {
  const filteredMovies = movies.filter((movie) => {
    const nameRu = movie.nameRU.toLowerCase();
    const nameEn = movie.nameEN.toLowerCase();
    const query = searchQuery.toLowerCase().trim();
    return nameRu.includes(query) || nameEn.includes(query);
  });

  return shortFilms === 'on' ? filterShortMovies(filteredMovies) : filteredMovies;
};
