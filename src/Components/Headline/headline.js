import React from 'react';
import Avatar from 'avataaars';
import './headline.css';

export class Headline extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="headlineContainer">
        <Avatar
            style={{width:'100%',gridArea:'pic'}}
            avatarStyle='Circle'
            topType='ShortHairShortFlat'
            accessoriesType='Round'
            hairColor='Black'
            facialHairType='Blank'
            clotheType='BlazerShirt'
            eyeType='Default'
            eyebrowType='Default'
            mouthType='Default'
            skinColor='Light'
        />
        <h1 id="name" style={{gridArea:'t'}}>Alan Ngo</h1>
        <h3 id="description" style={{gridArea:'des'}}>I'm a student / developer based in London, UK. I have a passion for programming and love to create games and apps.</h3>
        <a id="redirect" href="#projectContainer" style={{gridArea:'d',color:'black'}} class="fas fa-chevron-down fa-3x"></a>
      </div>
    );
  }
}