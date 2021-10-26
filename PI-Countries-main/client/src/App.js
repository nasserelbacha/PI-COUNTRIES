import './App.css';
import React from 'react';
import Inicio from './components/inicio/inicio'
import Home from './components/home/home'
import post from './components/post/post'
import detalle from './components/detalle/detalle'
import { Route, BrowserRouter  } from "react-router-dom";
import { Fragment } from 'react';
function App() {
  return (
   <Fragment>
     <BrowserRouter>
      <Route exact path = '/' component = {Inicio} /> 
      <Route exact path = '/home' component = {Home} />
      <Route exact path = '/post' component = {post} /> 
      <Route exact path = '/detail/:id' component = {detalle} /> 
     </BrowserRouter>
   </Fragment>
  );
}

export default App;
