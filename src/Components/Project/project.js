import React from 'react';

export class Project extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div id="projectContainer">
            <h1>Projects</h1>
            <div id="projects">
                    <div class="project"><h2>Title</h2><p>Description</p><p>used:</p></div>
                    <div class="project"><h2>Title</h2><p>Description</p><p>used:</p></div>
                    <div class="project"><h2>Title</h2><p>Description</p><p>used:</p></div>
                    <div class="project"><h2>Title</h2><p>Description</p><p>used:</p></div>
            </div>
        </div>
    );
  }
}