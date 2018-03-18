import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';
import './index.css';

WebFont.load({
  google: {
    families: ['Playfair Display', 'serif']
  }
});

ReactDOM.render(
  <h1>The Sound of History</h1>,
  document.getElementById('root')
);
