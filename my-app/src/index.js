import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';

import 'bootstrap/dist/css/bootstrap.css';
import { InputGroup, InputGroupAddon, Button, Input, NavLink, Container, Row, Col, Navbar, Nav, NavItem } from 'reactstrap';

import { ResultsPage, HistoryBox, SongBox } from "./resultsPage.js"
import { NavBar } from './decorator.js'
import 'normalize.css'; //npm install normalize.css
import './index.css';

class Home extends React.Component {
    render(){
        return (
            <div>
                <NavBar />
                <div className="container">
                    <ResultsPage />
                </div>
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
