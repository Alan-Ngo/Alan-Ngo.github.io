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
              <a class="icon" href="#">
                <i class="fab fa-linkedin fa-2x"></i>
              </a>
              <a class="icon" href="mailto:alan99179@gmail.com">
                <i class="fas fa-envelope fa-2x"></i>
              </a>
              <a class="icon" href="#">
                <i class="fab fa-github-alt fa-2x"></i>
              </a>
            </div>
        </div>
        <div>
        <form action="action_page.php">
            <div>
              <label for="name">Name</label>
              <input type="text" id="fname" name="name" />
            </div>
            <div>
              <label for="lname">Email</label>
              <input type="email" id="femail" name="email" />
            </div>
            <div>
              <label for="subject">Subject</label>
              <input type="text" id="fsubject" name="subject" />
            </div>
            <div>
              <label for="message">Message</label>
              <textarea id="subject" name="fsubject" ></textarea>
            </div>
            <input type="submit" value="Submit"/>
          </form>
        </div>
        </div>
        </div>

        </div>
    );
  }
}