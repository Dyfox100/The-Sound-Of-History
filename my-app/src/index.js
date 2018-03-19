import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';

import 'bootstrap/dist/css/bootstrap.css';
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';

import logo from './img/soundOfMusic.png'
import './index.css';

class Home extends React.Component {
  render(){
    return (
      <div>
        <img src={logo} class="title"/>
        <br/>
        <Search/>
        <br/>
        <Description/>
      </div>
    );
  }
}

class Search extends React.Component {
  render(){
    return (
      <div id="searchBox">
        <InputGroup>
          <Input placeholder="Enter a date, song, or event" />
          <InputGroupAddon addonType="append">
            <Button color="secondary"> Search </Button>
          </InputGroupAddon>
        </InputGroup>
      </div>
    );
  }
}

class Description extends React.Component {
   render(){
      return (
         <div>
            <p>Description of Project goes here.</p>
         </div>
      );
   }
}

WebFont.load({
   google: {
      families: ['Playfair Display', 'serif']
  }
});

ReactDOM.render(
   <Home />,
   document.getElementById('root')
);
