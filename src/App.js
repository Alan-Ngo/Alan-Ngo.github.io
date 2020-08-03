import React from 'react';
import {Navigation} from './Components/Navigation/navigation';
import {Headline} from './Components/Headline/headline';
import { Project } from './Components/Project/project';
import { Blog } from './Components/Blog/blog';
import { Footer } from './Components/Footer/footer';

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
