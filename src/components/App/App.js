import './App.css';
import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate, Navigate } from "react-router-dom";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import Header from "../Header/Header";
import HeaderAuth from "../HeaderAuth/HeaderAuth";
import Footer from '../Footer/Footer';
import Main from "../Main/Main";
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from "../Login/Login";
import Register from "../Register/Register";
import PageNotFound from '../PageNotFound/PageNotFound.js';
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import mainApi from '../../utils/MainApi';



function App() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [myMovies, setMyMovies] = useState([]);
  const [infoMessage, setInfoMessage] = useState({
    isShown: false,
    message: '',
    code: 200,
  });

  function handleLoggedIn() {
    setLoggedIn(true);
  };

  useEffect(() => {
    mainApi.getUserData()
      .then(data => {
        handleLoggedIn();
        setCurrentUser(data);
      })
      .catch(err => {
        console.log(err);
      })
  }, [loggedIn]);


  useEffect(() => {
    if(loggedIn){
      mainApi.getUsersMovies()
      .then((data) => {
        setMyMovies(data);
        setIsError(false);
      })
      .catch(err => {
        setIsError(true);
        console.log(err);
      })
    }
  }, [loggedIn]);

  function handleUserRegister(name, email, password){
    mainApi.register(name, email, password)
      .then(data => {
        if(data){
          handleUserLogin(data.email, password);
        }   
      })
      .catch(err => {
        setIsError(true);
        console.log(err);
      })
  };

  function handleUserLogin(email, password) {
    mainApi.login(email, password)
      .then(res => {
        console.log(res);
        handleLoggedIn();
        navigate('/movies');
      })
      .catch(err => {
        setIsError(true);
        console.log(err);
      })
  };

  function handleUserSignOut() {
    mainApi.signout()
      .then(res => {
        setLoggedIn(false);
        setCurrentUser({});
        localStorage.clear();
        navigate('/');
      })
      .catch(err => {
        console.log(err);
      })
  };

  function editProfile(name, email) {
    mainApi.updateUserProfile(name, email)
      .then(data => {
        console.log(data);
        setCurrentUser(data);
        setInfoMessage({
          ...infoMessage,
          isShown: true,
          type: 'profile',
        });
      })
      .catch(({ message, statusCode }) => {
        
        console.log({ message, statusCode })
        setInfoMessage({
          ...infoMessage,
          isShown: true,
          message,
          code: statusCode,
          type: 'profile',
        });
      })
  };

  function handleSaveMovie(movie){
    mainApi.saveNewMovie(movie)
      .then(newCard => {
        setMyMovies([newCard, ...myMovies]);
      })
      .catch(err => console.log(err))
  };
  
  function handleDeleteMovie(movie){
    mainApi.deleteMovie(movie._id)
      .then(() => {
        const newList = myMovies.filter((m) => m._id === movie._id ? false : true);
        setMyMovies(newList);
      })
      .catch(err => console.log(err))
  };

  function handleClickResetInfoMessage() {
    if (infoMessage.isShown){
      setInfoMessage({
        ...infoMessage,
        isShown: false,
        message: '',
        type: '',
        code: 200,
      });
    }
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='app' onClick={infoMessage.isShown ? handleClickResetInfoMessage : null}>    

        <Routes>
          <Route exact path="/"
            element={
              <>
                {loggedIn ? <HeaderAuth /> : <Header />}
                <Main isLogin={loggedIn}/>
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/"
            element={loggedIn ? <Navigate to="/movies" /> : <Navigate to="/signin" />}
          ></Route>
          <Route
              exact
              path="/signin"
              element={
                loggedIn ? (
                  <Navigate to="/" />
                ) : (
                  <Login
                    onLogin={handleUserLogin}
                  />
                )
              }
          ></Route>
          <Route
            exact
            path="/signup"
            element={
              loggedIn ? (
                <Navigate to="/" />
              ) : (
                <Register
                  onRegister={handleUserRegister}
                />
              )
            }
          ></Route>

          <Route  
            exact path="/movies"
            element={
              <ProtectedRoute allowed={loggedIn}>
                <HeaderAuth />
                <Movies isLogin={loggedIn}
                  savedMoviesList={myMovies}
                  onLikeClick={handleSaveMovie}
                  onDeleteClick={handleDeleteMovie}
                />
                <Footer />
              </ProtectedRoute>
            }
          ></Route>
          <Route  
            exact path="/saved-movies"
            element={
              <ProtectedRoute allowed={loggedIn}>
                <HeaderAuth />
                <SavedMovies isLogin={loggedIn}
                  list={myMovies}
                  onDeleteClick={handleDeleteMovie}
                  isError={isError}
                  infoMessage={infoMessage}
                />
                <Footer />
              </ProtectedRoute>
            }
          ></Route>
          <Route
              exact
              path="/profile"
              element={
                <ProtectedRoute allowed={loggedIn}>
                  <HeaderAuth />
                  <Profile
                    isLogin={loggedIn}
                    onSignOut={handleUserSignOut}
                    editProfile={editProfile}
                    infoMessage={infoMessage}

                  />
                </ProtectedRoute>
              }
            ></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
};

export default App;















