import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';

import 'bootstrap/dist/css/bootstrap.css';
import { InputGroup, InputGroupAddon, Button, Input, NavLink, Container, Row, Col, Navbar, Nav, NavItem } from 'reactstrap';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import { ResultsPage, HistoryBox, SongBox } from "./resultsPage.js"
import { SearchPage } from './components/searchPage.js'
import { NavBar } from './decorator.js'
import { EventSuggest } from './eventSuggestPage.js'
import 'normalize.css'; //npm install normalize.css
import './index.css';

class Home extends React.Component {
    render(){
        return (
                <Router>
                    <div>
                        <NavBar />
                            <div className="container">
                                <Switch>
                                    <Route exact={true} path='/' component={ SearchPage } />
                                    <Route exact={true} path='/EventSuggest' component={ EventSuggest } />
                                    <Route path='/ResultsPage' component={ ResultsPage } />
                                </Switch>
                            </div>
                    </div>
                </Router>
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
