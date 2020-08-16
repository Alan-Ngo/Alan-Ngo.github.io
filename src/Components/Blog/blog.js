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
                    <a class="blog" href="#">
                    <div class="blogImg"></div>
                    <div class="blogInfo">
                      <h2 class="blogTitle">JavaScript Promises</h2>
                      <div class="blogExtra">
                        <p class="author">By Alan Ngo</p>
                        <p class="blogDate">May 08, 2020</p>
                      </div>
                    </div>
                    </a>
                    <a class="blog" href="#">
                    <div class="blogImg"></div>
                    <div class="blogInfo">
                      <h2 class="blogTitle">JavaScript Promises</h2>
                      <div class="blogExtra">
                        <p class="author">By Alan Ngo</p>
                        <p class="blogDate">May 08, 2020</p>
                      </div>
                    </div>
                    </a>
                    <a class="blog" href="#">
                    <div class="blogImg"></div>
                    <div class="blogInfo">
                      <h2 class="blogTitle">JavaScript Promises</h2>
                      <div class="blogExtra">
                        <p class="author">By Alan Ngo</p>
                        <p class="blogDate">May 08, 2020</p>
                      </div>
                    </div>
                    </a>
                    <a class="blog" href="#">
                    <div class="blogImg"></div>
                    <div class="blogInfo">
                      <h2 class="blogTitle">JavaScript Promises</h2>
                      <div class="blogExtra">
                        <p class="author">By Alan Ngo</p>
                        <p class="blogDate">May 08, 2020</p>
                      </div>
                    </div>
                    </a>
                    <a class="blog" href="#">
                    <div class="blogImg"></div>
                    <div class="blogInfo">
                      <h2 class="blogTitle">JavaScript Promises</h2>
                      <div class="blogExtra">
                        <p class="author">By Alan Ngo</p>
                        <p class="blogDate">May 08, 2020</p>
                      </div>
                    </div>
                    </a>
                   
            </div>
            <button>More Blogs</button>
        </div>
    );
  }
}