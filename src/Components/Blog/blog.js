import React from 'react';
import "./blog.css";
import { HashLink } from 'react-router-hash-link';

export class Blog extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div id="blogContainer">
            <h1>Blog</h1>
            <div id="blogs">

                    <a className="blog" href="#">
                    <div className="imgContainer">
                      <img className="blogImg" src="https://miro.medium.com/max/3600/1*6ahbWjp_g9hqhaTDSJOL1Q.png" ></img>
                      <div className="overlay"></div>
                    </div>
                    <div className="blogInfo">
                      <h2 className="blogTitle">JavaScript Promises</h2>
                      <div className="blogExtra">
                        <p className="author">By Alan Ngo</p>
                        <p className="blogDate">May 08, 2020</p>
                      </div>
                    </div>
                    </a>
                   
                    <a className="blog" href="#">
                    <div className="imgContainer">
                      <img className="blogImg" src="https://miro.medium.com/max/3600/1*6ahbWjp_g9hqhaTDSJOL1Q.png" ></img>
                      <div className="overlay"></div>
                    </div>
                    <div className="blogInfo">
                      <h2 className="blogTitle">JavaScript Promises</h2>
                      <div className="blogExtra">
                        <p className="author">By Alan Ngo</p>
                        <p className="blogDate">May 08, 2020</p>
                      </div>
                    </div>
                    </a>
                   
                    <a className="blog" href="#">
                    <div className="imgContainer">
                      <img className="blogImg" src="https://miro.medium.com/max/3600/1*6ahbWjp_g9hqhaTDSJOL1Q.png" ></img>
                      <div className="overlay"></div>
                    </div>
                    <div className="blogInfo">
                      <h2 className="blogTitle">JavaScript Promises</h2>
                      <div className="blogExtra">
                        <p className="author">By Alan Ngo</p>
                        <p className="blogDate">May 08, 2020</p>
                      </div>
                    </div>
                    </a>
                   
                    <a className="blog" href="#">
                    <div className="imgContainer">
                      <img className="blogImg" src="https://miro.medium.com/max/3600/1*6ahbWjp_g9hqhaTDSJOL1Q.png" ></img>
                      <div className="overlay"></div>
                    </div>
                    <div className="blogInfo">
                      <h2 className="blogTitle">JavaScript Promises</h2>
                      <div className="blogExtra">
                        <p className="author">By Alan Ngo</p>
                        <p className="blogDate">May 08, 2020</p>
                      </div>
                    </div>
                    </a>
                   
                    <a className="blog" href="#">
                    <div className="imgContainer">
                      <img className="blogImg" src="https://miro.medium.com/max/3600/1*6ahbWjp_g9hqhaTDSJOL1Q.png" ></img>
                      <div className="overlay"></div>
                    </div>
                    <div className="blogInfo">
                      <h2 className="blogTitle">JavaScript Promises</h2>
                      <div className="blogExtra">
                        <p className="author">By Alan Ngo</p>
                        <p className="blogDate">May 08, 2020</p>
                      </div>
                    </div>
                    </a>
                   
            </div>
            <button>More Blogs</button>
        </div>
    );
  }
}