import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';

import 'bootstrap/dist/css/bootstrap.css';
import { InputGroup, InputGroupAddon, Button, Input, NavLink } from 'reactstrap';

// ----- import css files -----
import './index.css';

// ----- INTERFACE -----
class EventSuggest extends React.Component {
   render(){
      return (

      );
   }
   listYearBoxes(){

   }
}
// ----- END OF INTERFACE -----

class YearBox extends React.Component {
   var yearName = "";

   render(){
      return (

      );
   }
   setYearName(){

   }
   yearEvents(){

   }
}

WebFont.load({
    google: {
        families: ['Playfair Display', 'serif']
    }
});

ReactDOM.render(
   <EventSuggest />,
   document.getElementById('root')
);