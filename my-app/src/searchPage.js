import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';

import 'bootstrap/dist/css/bootstrap.css';
import { InputGroup, InputGroupAddon, Button, Input, NavLink } from 'reactstrap';

import './index.css';

class SearchPage extends React.Component {
    render(){
        return (

        );
    }
    receives(){

    }
}

class DescriptionBox extends React.Component {
    var description = "";

    render(){
        return (

        );
    }
    setDescription(){

    }
}

class SearchBar extends React.Component {
    var input = "";

    render(){
        return (

        );
    }
    setInput(){

    }
    getInput(){

    }
}

WebFont.load({
    google: {
        families: ['Playfair Display', 'serif']
    }
});

ReactDOM.render(
   <SearchPage />,
   document.getElementById('root')
);
