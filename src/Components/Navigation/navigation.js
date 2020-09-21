import React from 'react';
import Particles from 'react-particles-js';
import './navigation.css';

export class Navigation extends React.Component {
    constructor(props) {
      super(props);
      const onClick = () => console.log('clicked');

      this.myFunction = this.myFunction.bind(this);
    }

    myFunction(event){
        event.preventDefault();
        console.log('yyyy');
        var x = document.getElementById("nav");
        if (x.className === "topnav") {
          x.className += " responsive";
        } else {
          x.className = "topnav";
        }
    }

    render() {
      return (
        <div >
            <div id="container">
                <div id="logo">AN</div>
                <div id="nav" class="topnav">
                <div><a class="section" href="#headlineContainer"><h3>About</h3></a><div class="underline"></div></div>
                <div><a class="section" href="#projectContainer"><h3>Projects</h3></a><div class="underline"></div></div>
                <div><a class="section" href="#blogContainer"><h3>Blog</h3></a><div class="underline"></div></div>
                <div><a class="section" href="#contact"><h3>Contact</h3></a><div class="underline"></div></div>
                </div>            
                <div id="logo">
                  <button onClick={this.myFunction}>
                  <i class="fa fa-bars"></i>
                  </button>
                </div>
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