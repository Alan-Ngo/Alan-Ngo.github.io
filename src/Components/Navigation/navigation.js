import React from 'react';
import './navigation.css';
import { HashLink } from 'react-router-hash-link';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export class Navigation extends React.Component {
    constructor(props) {
      super(props);

      this.myFunction = this.myFunction.bind(this);

      initParticlesEngine(async (engine) => {
        await loadSlim(engine);
      }).then(() => {
        console.debug("Particles Engine loaded");
      });
    }



    myFunction(event){
        event.preventDefault();
        var x = document.getElementById("nav");
        if (x.className === "topnav") {
          x.className += " responsive";
        } else {
          x.className = "topnav";
        }
    }

    render() {
      return (
        <div id="navbar">
            <div id="container">
                <div id="logo"><a href="/">AN</a></div>
                <div id="nav" className="topnav">
                <div><HashLink className="section" to='/#headlineContainer'><h3>About</h3></HashLink><div className="underline"></div></div>
                <div><HashLink className="section" to='/#projectContainer'><h3>Projects</h3></HashLink><div className="underline"></div></div>
                <div><HashLink className="section" to='/#blogContainer'><h3>Blog</h3></HashLink><div className="underline"></div></div>
                <div><HashLink className="section" to='/#contact'><h3>Contact</h3></HashLink><div className="underline"></div></div>
                </div>            
                <div id="logo">
                  <button onClick={this.myFunction}>
                  <i className="fa fa-bars"></i>
                  </button>
                </div>
                </div>

            <Particles
            id="tsparticles"
            options={{
                fullScreen: {
                    enable: false
                },
                background: {
                    color: {
                        value: "rgb(20,24,32)",
                    },
                },
                fpsLimit: 120,
                particles: {
                    color: {
                        value: "rgb(80,84,92)",
                    },
                    links: {
                        color: "rgb(70,74,82)",
                        distance: 150,
                        enable: true,
                        opacity: 0.7,
                        width: 2,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "out",
                        },
                        random: true,
                        speed: 1,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 200,  
                    },
                    opacity: {
                        value: 1,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 4, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        />
        </div>
 
      );
    }
  }