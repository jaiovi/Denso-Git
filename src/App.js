import './assets/scss/app.scss';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';

import Profile from './pages/Profile';
import Header from './components/Header';
import Signup from './pages/Signup';
import VistaAdmin from './pages/VistaAdmin';

import Footer from './components/Footer';

import * as bootstrap from "bootstrap"

// definimos un arreglo [] de diccionarios {} para simular la información de los usuarios de una API
/*const USERS = [
  {id:1, fullName: "Sara Anderson", age: 38},
  {id:2, fullName: "John Perez", age: 35},
  {id:3, fullName: "Ruben Barraza ", age: 18},
  {id:4, fullName: "Lorena Lazos", age: 20}
]*/

function App() {    // esta función maneja el ciclo de vida de la aplicación.
  

  // a veces es necesario esperar a que se rendericen los objetos para poder trabajar con ellos


  return (                                        // lo que regresa no es HTML
  <div className="App">
      <BrowserRouter>
        <Header/>                                       {/* header de navegación constante en todas las páginas */}
        <Routes>
          <Route path='' element={<Navigate to="/home" replace={true} />}/>    {/* la página default será Home, Navigate sirve para redireccionar */}
          <Route path='/home' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/profile/:userId' element={<Profile/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/VistaAdmin' element={<VistaAdmin/>} />
        </Routes>
        <footer><Footer /></footer>
      </BrowserRouter>
    </div>
  );  
}
<Route path='/profile/:userId' element={<Profile/>} />


export default App;
