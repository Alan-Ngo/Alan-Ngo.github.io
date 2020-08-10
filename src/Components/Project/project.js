import React from 'react';
import './project.css';

export class Project extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div id="projectContainer">
            <div>
              <h1>Personal Projects</h1>
              <div>Self-motivated projects which expand my creativity and offer clients an insight into my wider vision</div>
            </div>

            <div id="projects">
                    <a class="project" href="#">
                      <img></img>
                      <div class="title">
                        <h2>Title</h2>
                      </div>
                    </a>
                    <a class="project" href="#">
                      <img></img>
                      <div class="title">
                        <h2>Title</h2>
                      </div>
                    </a>
                    <a class="project" href="#">
                      <img></img>
                      <div class="title">
                        <h2>Title</h2>
                      </div>
                    </a>
                    <a class="project" href="#">
                      <img></img>
                      <div class="title">
                        <h2>Title</h2>
                      </div>
                    </a>
                  
            </div>
            <button type="button" onclick="alert('Hello world!')">More Projects</button>

        </div>
    );
  }
}