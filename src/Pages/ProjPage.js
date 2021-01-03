import { Navigation } from '../Components/Navigation/navigation';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './ProjPage.css';
import React from "react";
import pic1 from './Website/CAPTCHA1.png';
import pic2 from './Website/CAPTCHA2.png';
import pic3 from './Website/CAPTCHA3.png';
import pic4 from './Website/CAPTCHA4.png';

const slideImages = [
  { pic1 },
  { pic2 },
  { pic3 }
];

const ProjectPage = () => {

  return (
    <div className="App">
      <div>
        <Navigation></Navigation>
        <div class="mainContent">
          <h1 class="projectName">CAPTCHA Software</h1>
          <div class="infoPage">
            <Carousel class="slider">
              <div>
                <img src={pic1} />
              </div>
              <div>
                <img src={pic4} />
              </div>
              <div>
                <img src={pic3} />
              </div>
              <div>
                <img src={pic2} />
              </div>
            </Carousel>
            <div style={{paddingLeft:"10%",paddingRight:"10%",    textAlign: "left"}}>
            <h2>About</h2>
            <p>CAPTCHA stands for the Completely Automated Public Turing test to tell Computers and Humans Apart. This program is made in Python with the Tkinter GUI library and is able to generate random characters with different fonts and ranging sizes and a filter to allow for the obfuscation of the characters. Extra security measure includes checking for suspicious mouse movements, a server to check if an ip has been used alot in a certain time frame.   </p>
            <br></br>
            A seperate program is made using the pytesseract library (python wrapper for Google’s tesseract-OCR) is used to determine if the program can then recognise the characters to determine how good the generated CAPTCHA is. The program made is unable to determine the characters.
            <br></br>
            <br></br>
            <h2>Technologies</h2>
            Python Programming language
            <br></br>
            <br></br>
            Third party libraries used:
            <ul>
            <li>Matplotlb</li>
            <li>pixelsPymouse</li>
            <li>Sqlite3</li>
            <li>Crypto</li>
            </ul>
            <a class="link" target="_blank" href="https://github.com/Alan-Ngo/CAPTCHA">Link to github code</a>
          </div>
          
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProjectPage;