import React from 'react';
import './App.css?v=2';
import {Navigation} from './Components/navigation';
import {Headline} from './Components/headline';
import { Project } from './Components/project';
import { Blog } from './Components/blog';
import { Footer } from './Components/footer';

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Headline></Headline>
      <Project></Project>
      <Blog></Blog>
      <Footer></Footer>
    </div>
  );
}

export default App;
