import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';
// npm install --save reactstrap@next react react-dom
import { Button } from 'reactstrap';
import './index.css';

class Main extends React.Component {
  render(){
    return (
      <div>
        <h1>The Sound of History</h1>
        <Button color="primary" size="lg"> Search </Button>
      </div>
    );
  }
}

class Search extends React.Component {
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
