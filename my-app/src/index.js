import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';
import './index.css';

class Main extends React.Component {
   render(){
      return (
         <h1>The Sound of History</h1>
      );
   }
}

class Button extends React.Component {
  render(){
     return (
        <h1>Button Goes Here</h1>
     );
  }
}

WebFont.load({
   google: {
      families: ['Playfair Display', 'serif']
  }
});

ReactDOM.render(
   <Main />,
   document.getElementById('root')
);
