import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';

import 'bootstrap/dist/css/bootstrap.css';
import { InputGroup, InputGroupAddon, Button, Input, NavLink } from 'reactstrap';

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
  constructor(){
    super();
    this.state = {
      text: 'Temp Value'
    };
  }

  updateSearch(){
    this.setState( { text: this.refs.searchField.value } );
    console.log("loading");
  }

  render(){
    return (
      <div id="searchBox">
        <InputGroup>
          <Input placeholder="Enter a date, song, or event" ref="searchField" type="text"/>
          <InputGroupAddon addonType="append">
            <Button color="secondary"
              onClick={ (e) => { this.updateSearch(); } }>
              <NavLink> Search </NavLink>
            </Button>
          </InputGroupAddon>
        </InputGroup>
        <br/>
        {this.state.text}
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
