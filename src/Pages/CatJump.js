import { Navigation } from '../Components/Navigation/navigation';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './ProjPage.css';
import React from "react";

import pic1 from './Website/Cat jump/cat1.png';
import pic2 from './Website/Cat jump/cat2.png';
import pic3 from './Website/Cat jump/cat3.png';

const CatJump = () => {

  return (
    <div className="App">
      <div>
        <Navigation></Navigation>
        <div class="mainContent">
          <h1 class="projectName">Cat Jump Game</h1>
          <div class="infoPage">
            <Carousel class="slider">
              <div>
                <img src={pic1} />
              </div>
              <div>
                <img src={pic2} />
              </div>
              <div>
                <img src={pic3} />
              </div>
            </Carousel>
            <div style={{paddingLeft:"10%",paddingRight:"10%",textAlign: "left"}}>
            <h2>About</h2>
            <p> The Cat Jump game is made in the Unity Game engine and is the first game that I have published to the Google Play Store. It currently has over 100 downloads from multiple different countries. The aim of the game is to get the highest personal score by making the cat jump from platform to platform, the further the Cat reaches. the more points are awarded.</p>
            <br></br>
            Give the game a try below:<br></br>
            <a class="link" target="_blank" href="https://play.google.com/store/apps/details?id=com.archeon.cat.catjump&hl=en_GB&gl=US">Link to the game</a>
            <br></br>
            <br></br>
            <h2>Technologies</h2>
            C# Programming language
            <br></br>
            Unity Game engine
            <br></br>
            <br></br>

          </div>
          
          </div>
        </div>

      </div>
    </div>
  );
};

export default CatJump;