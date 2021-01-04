import React from 'react';

import './App.css';
import {
  HashRouter,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";
import MainPage from './Pages/MainPage';
import ProjPage from './Pages/ProjPage';
import CatJump from './Pages/CatJump';

function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <switch>
        <Route exact path="/" render={MainPage} />
        <Route path="/project" render={ProjPage} />
        <Route path="/catjump" render={CatJump} />
      </switch>
    </HashRouter>
  );
}

export default App;
