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
              <div>A space to showcase projects that highlight my creativity, problem-solving, and passion for new ideas.</div>
            </div>

            <div id="projects">
                    <a className="project" href="http://localhost:3000/project">
                      <div className="projImgC">
                        <img id="captcha"></img>
                        <div className="overlay"></div>
                      </div>
                      <div className="title">
                        <h2>CAPTCHA software</h2>
                      </div>
                    </a>

                    <a className="project" href="http://localhost:3000/catjump">
                      <div className="projImgC">
                        <img id="catjump"></img>
                        <div className="overlay"></div>
                      </div>
                      <div className="title">
                        <h2>Cat Jump</h2>
                      </div>
                    </a>

                    <a className="project" href="http://localhost:3000/">
                      <div className="projImgC">
                        <img></img>
                        <div className="overlay"></div>
                      </div>
                      <div className="title">
                        <h2>Title</h2>
                      </div>
                    </a>
                    
                    <a className="project" href="http://localhost:3000/">
                      <div className="projImgC">
                        <img></img>
                        <div className="overlay"></div>
                      </div>
                      <div className="title">
                        <h2>Title</h2>
                      </div>
                    </a>
                  
            </div>
            <button type="button">More Projects</button>

        </div>
    );
  }
}