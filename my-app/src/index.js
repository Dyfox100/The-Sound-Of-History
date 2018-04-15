import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';

import 'bootstrap/dist/css/bootstrap.css';
import { InputGroup, InputGroupAddon, Button, Input, NavLink } from 'reactstrap';

import {ResultsPage, HistoryBox, SongBox} from "./resultsPage.js"
import './index.css';

class Home extends React.Component {
  render(){
    return (
      <div>
        <ResultsPage/>
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
