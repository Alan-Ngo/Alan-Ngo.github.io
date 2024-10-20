import {Navigation} from '../Components/Navigation/navigation';
import {Headline} from '../Components/Headline/headline';
import { Project } from '../Components/Project/project';
import { Blog } from '../Components/Blog/blog';
import { Footer } from '../Components/Footer/footer';

import React from "react";
//Functional Component 

const MainPage = () => {
  return (
    <div className="App">
    <Headline></Headline>
    <Project></Project>
    <Blog></Blog>
    <Footer></Footer>
  </div>
  );
};

export default MainPage;