import { BASE_URL } from './constants';

class MainApi {
  constructor({
    baseUrl,
    headers
  }) {
    this._baseUrl = baseUrl;
    this._userUrl = `${this._baseUrl}/users/me`;
    this._moviesUrl = `${this._baseUrl}/movies`;
    this._token = headers['authorization'];
  };

  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }

  register(name, email, password) {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        password,
      })
    })
    .then(this._getResponseData)
  };

  login(email, password) {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password,
      })
    })
    .then(this._getResponseData)
  };

  signout() {
    return fetch(`${this._baseUrl}/signout`,{
      method: 'POST',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        authorization: this._token,
      }
    })
    .then(this._getResponseData)
  };

  getUserData() {
    return fetch(this._userUrl, {
      method: "GET",
      headers: {
        authorization: this._token,
      },
      credentials: 'include',
    })
    .then(this._getResponseData)
  };

  updateUserProfile(name, email) {
    return fetch(this._userUrl, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        authorization: this._token,
      },
      credentials: 'include',
      body: JSON.stringify({
        name,
        email,
      })
    })
    // .then(this._getResponseData);
    .then(res => {
      return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
    })
  };

  getUsersMovies() {
    return fetch(this._moviesUrl, {
      headers: {
        authorization: this._token,
      },
      credentials: 'include',
    })
    .then(this._getResponseData);
  };

  saveNewMovie({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    nameRU,
    nameEN,
    thumbnail,
    id,
  }) {
    return fetch(this._moviesUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: this._token,
      },
      credentials: 'include',
      body: JSON.stringify({
        country: country || 'no country',
        director,
        duration,
        year,
        description,
        image,
        trailer: trailerLink,
        nameRU: nameRU || 'no name',
        nameEN: nameEN || 'no name',
        thumbnail,
        movieId: id,
      })
    })
    .then(this._getResponseData)
  };

  deleteMovie(movieId) {
    return fetch(`${this._moviesUrl}/${movieId}`, {
      method: 'DELETE',
      headers: {
        authorization: this._token,
      },
      credentials: 'include',
    })
    .then(this._getResponseData);
  };

};

const mainApi = new MainApi({
  baseUrl: BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  },
});

export default mainApi;