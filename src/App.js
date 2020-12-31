import React from 'react';

import './App.css';
import {
  BrowserRouter as HashRouter,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";
import MainPage from './Pages/MainPage';
import ProjPage from './Pages/ProjPage';


function App() {
  return (
    <HashRouter basename='/'>
       <Route exact path="/" component={MainPage} />
       <Route path="/test" component={ProjPage} />
      </HashRouter>
  );
}

export default App;
