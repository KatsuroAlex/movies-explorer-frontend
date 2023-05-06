import './App.css';
import React from "react";
import { Route, Routes, } from "react-router-dom";
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

function App() {
  return (
    <div className='app'>          
      <Routes>
        <Route exact path="/"
          element={
            <>
              <Header />
              <Main />
              <Footer />
            </>
          }
        ></Route>
        <Route exact path="/movies"
          element={
            <>
              <HeaderAuth />
              <Movies />
              <Footer />
            </>
          }
        ></Route>
        <Route exact path="/saved-movies"
          element={
            <>
              <HeaderAuth />
              <SavedMovies />
              <Footer />
            </>
          }
        ></Route>
        <Route exact path="/profile"
          element={
            <>
              <HeaderAuth />
              <Profile />
            </>
          }
        ></Route>
        <Route exact path="/signin"
          element={<Login />}
        ></Route>
        <Route exact path="/signup"
          element={<Register/>}
        ></Route>
        <Route path="*" element={<PageNotFound />}></Route>

      </Routes>
    </div>
  );
};

export default App;
