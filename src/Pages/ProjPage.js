import {Navigation} from '../Components/Navigation/navigation';
import { Project } from '../Components/Project/project';

import React from "react";
//Functional Component 

const ProjectPage = () => {
  return (
    <div className="App">
      <div>
        <Navigation></Navigation>
        <Project></Project>
      </div>
  
  </div>
  );
};

export default ProjectPage;