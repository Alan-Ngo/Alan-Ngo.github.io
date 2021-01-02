import React from 'react';
import Avatar from 'avataaars';
import './headline.css';
import { HashLink } from 'react-router-hash-link';

export class Headline extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="headlineContainer">
        <Avatar
            style={{width:'100%',height:'100%',gridArea:'pic'}}
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

        <div id="down" style={{gridArea:'d'}}>
          <HashLink id="redirect" to="#projectContainer" class="fas fa-chevron-down fa-3x"></HashLink>
        </div>
      </div>
    );
  }
}