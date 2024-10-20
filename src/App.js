import React from 'react';

import './App.css';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import MainPage from './Pages/MainPage';
import ProjPage from './Pages/ProjPage';
import CatJump from './Pages/CatJump';
import {Navigation} from './Components/Navigation/navigation';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<MainPage/>} />
          <Route path="/project" element={<ProjPage/>} />
          <Route path="/catjump" element={<CatJump/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
