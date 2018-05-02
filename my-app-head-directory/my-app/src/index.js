// ----- IMPORTS -----
import React from 'react';
import ReactDOM from 'react-dom';

import WebFont from 'webfontloader';
import { InputGroup,
        InputGroupAddon,
        Button,
        Input,
        NavLink,
        Container,
        Row,
        Col,
        Navbar,
        Nav,
        NavItem } from 'reactstrap';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

// import components
import { ResultsPage, HistoryBox, SongBox } from "./components/resultsPage.js"
import { SearchPage } from './components/searchPage.js'

// import css files
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

// ----- END OF IMPORTS -----

class Home extends React.Component {
    render(){
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact={true} path='/' component={ SearchPage } />
                        <Route path='/ResultsPage' component={ ResultsPage } />
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
