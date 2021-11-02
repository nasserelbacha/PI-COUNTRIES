import './App.css';
import React from 'react';
import Inicio from './components/inicio/inicio'
import Home from './components/home/home'
import Post from './components/post/Post'
import detalle from './components/detalle/detalle'
import Nav from './components/nav/nav'
import { Route, BrowserRouter  } from "react-router-dom";
import { Fragment } from 'react';
function App() {
  return (
   <Fragment>
     <BrowserRouter>
      <Route exact path = '/' component = {Inicio} /> 
      <Route exact path = '/home' component = {Nav} />
      <Route exact path = '/home' component = {Home} />
      <Route exact path = '/post' component = {Post} /> 
      <Route exact path = '/detail/:id' component = {detalle} /> 
     </BrowserRouter>
   </Fragment>
  );
}

export default App;
