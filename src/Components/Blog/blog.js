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
                    <div class="blogImg"></div>
                    <div class="blogInfo">
                      <h2 class="blogTitle">JavaScript Promises</h2>
                      <div class="blogExtra">
                        <p class="author">By Alan Ngo</p>
                        <p class="blogDate">May 08, 2020</p>
                      </div>
                    </div>
                    </div>

                    <div class="blog">
                    <div class="blogImg"></div>
                    <div class="blogInfo">
                      <h2 class="blogTitle">JavaScript Promises</h2>
                      <div class="blogExtra">
                        <p class="author">By Alan Ngo</p>
                        <p class="blogDate">May 08, 2020</p>
                      </div>
                    </div>
                    </div>
                    <div class="blog">
                    <div class="blogImg"></div>
                    <div class="blogInfo">
                      <h2 class="blogTitle">JavaScript Promises</h2>
                      <div class="blogExtra">
                        <p class="author">By Alan Ngo</p>
                        <p class="blogDate">May 08, 2020</p>
                      </div>
                    </div>
                    </div>
                    <div class="blog">
                    <div class="blogImg"></div>
                    <div class="blogInfo">
                      <h2 class="blogTitle">JavaScript Promises</h2>
                      <div class="blogExtra">
                        <p class="author">By Alan Ngo</p>
                        <p class="blogDate">May 08, 2020</p>
                      </div>
                    </div>
                    </div>

                   
            </div>
            <button>More Blogs</button>
        </div>
    );
  }
}