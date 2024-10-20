import React from 'react';
import './footer.css';

export class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="footer">
        <div id="test">
        <h1>Contact</h1>

        <div>  
        <div id="contact">
        <p>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
            <div id="icons">
              <a className="icon" target="_blank" href="https://www.linkedin.com/in/alanngo1/">
                <i className="fab fa-linkedin fa-2x"></i>
              </a>
              <a className="icon" href="mailto:alan99179@gmail.com">
                <i className="fas fa-envelope fa-2x"></i>
              </a>
              <a className="icon" target="_blank" href="https://github.com/Alan-Ngo">
                <i className="fab fa-github-alt fa-2x"></i>
              </a>
            </div>
        </div>
        <div>
        <form action="action_page.php">
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" id="fname" name="name" />
            </div>
            <div>
              <label htmlFor="lname">Email</label>
              <input type="email" id="femail" name="email" />
            </div>
            <div>
              <label htmlFor="subject">Subject</label>
              <input type="text" id="fsubject" name="subject" />
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea id="subject" name="fsubject" ></textarea>
            </div>
            <div>
              <input type="submit" value="Submit"/>
            </div>
          </form>
        </div>
        </div>
        </div>

        </div>
    );
  }
}