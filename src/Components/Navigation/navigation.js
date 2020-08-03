import React from 'react';
import Particles from 'react-particles-js';
import './navigation.css';

export class Navigation extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <div>
            <div id="container">
                <div id="logo">AN</div>
                <div id="nav">
                <div>Home </div>
                <div>Projects</div>
                <div>Blog</div>
                <div>Contact</div>
                </div>
                <div id="logo"></div>
            </div>

            <Particles
                style={{position:'relative',top:'-80px',left:'0px',backgroundColor:'rgb(20,24,32)',zIndex:-100,height: '80px !important'}} 
                params={{ 
                "particles": {
                    "number": {
                    "value": 120,
                    "density": {
                        "enable": true,
                        "value_area": 1500
                        }
                    },
                    "color": {
                    "value": 'rgb(80,84,92)'
                    },
                    "opacity": {
                    "value": 1,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                        }
                    },
                    "size": {
                    "value": 5,
                    "random": true,
                    },
                    "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": 'rgb(70,74,82)',
                    "opacity": 0.4,
                    "width": 2
                    },
                    "move": {
                    "enable": true,
                    "speed": 1,
                    "direction": "none",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": true,
                        "rotateX": 600,
                        "rotateY": 600
                        }
                    }
                }
                }} 
            /> 
        </div>
      );
    }
  }