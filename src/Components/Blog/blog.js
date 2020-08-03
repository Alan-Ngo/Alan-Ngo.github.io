import React from 'react';
import "./blog.css";

export class Blog extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div id="blogContainer">
            <h1>Blog</h1>
            <div id="blogs">
                    <div class="blog">
                    <div style={{backgroundColor:'rgba(0,0,0,0.1)',height:'50%',borderTopLeftRadius:'15px',borderTopRightRadius:'15px'}}>background</div>
                    <div>Color code</div>
                    <div>Java</div>
                    <h1>Title</h1>
                    <div>date:</div>
                    </div>

                    <button>More</button>
            </div>
        </div>
    );
  }
}