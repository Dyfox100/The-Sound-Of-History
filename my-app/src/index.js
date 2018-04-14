import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';

import 'bootstrap/dist/css/bootstrap.css';
import { InputGroup, InputGroupAddon, Button, Input, NavLink } from 'reactstrap';

import logo from './img/soundOfMusic.png'
import {SearchPage, SearchBar, DescriptionBox} from "./components/searchPage";
import './index.css';

class Home extends React.Component {
  render(){
    return (
      <div>
        <img src={logo} class="title"/>
        <br/>
        <SearchPage/>
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
