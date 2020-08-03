import React from 'react';

export class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div id="contact">
            <h1>Contact</h1>
            <h3>Email:</h3>
            <h3>Github</h3>
            <h3>Linkdin</h3>
        </div>
    );
  }
}