import React from 'react';
export class Banner extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mood: 'good' };
    this.toggleMood = this.toggleMood.bind(this);
  }


  toggleMood() {
    const newMood = this.state.mood === 'good' ? 'bad' : 'good';
    this.setState({ mood: newMood });
  }

  render() {
    return (
      <div>
        <h1>I'm feeling {this.state.mood}!</h1>
        <button onClick={this.toggleMood}>
          Click Me
        </button>
        
        <div style={{height:400,width:400}}>
          <img style={{width:'100%'}} alt="Logo" src="https://mcdn.wallpapersafari.com/medium/95/72/DngIZt.jpg"></img>
        </div>
        <div id="particles-js"></div>
        <script src="/qwe.js"></script>
      </div>
    );
  }
}

