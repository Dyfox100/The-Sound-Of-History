// ----- IMPORTS -----
import React from 'react';
import ReactDOM from 'react-dom';

import WebFont from 'webfontloader';
import { InputGroup, InputGroupAddon, Button, Input, NavLink, Container, Row,
        Col, Navbar, Nav, NavItem } from 'reactstrap';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

// import components
import { ResultsPage, HistoryBox, SongBox } from "./components/resultsPage.js";
import { SearchPage } from './components/searchPage.js';
import { NavBar } from './components/decorator.js';
import { EventSuggest } from './components/eventSuggestPage.js';

// import css files
// import 'normalize.css';
import './index.css';
// import 'bootstrap/dist/css/bootstrap.css';
// ----- END OF IMPORTS -----

// className="search-background"

class Home extends React.Component {
    render(){
        return (
                <Router>
                    <div className="search-background">
                        <NavBar />
                                <Switch>
                                    <Container>
                                        <Route exact={true} path='/' component={ SearchPage } />
                                        <Route exact={true} path='/EventSuggest' component={ EventSuggest } />
                                        <Route path='/ResultsPage' component={ ResultsPage } />
                                    </Container>
                                </Switch>
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
