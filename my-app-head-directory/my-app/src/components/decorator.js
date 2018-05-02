// ----- IMPORTS -----
import React from 'react';
import ReactDOM from 'react-dom';

import WebFont from 'webfontloader';
import { InputGroup, InputGroupAddon, Button, Input, NavLink,
       Container, Row, Col, Navbar, Nav, NavItem } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// import components
import { SearchPage } from './searchPage.js';
import { EventSuggest } from './eventSuggestPage.js';


// import css files
import 'bootstrap/dist/css/bootstrap.css';

export class NavBar extends React.Component {
    render(){
        return (
            <div>
                <Navbar color="white" className="NavBar" light expand="md">
                    <Nav className="ml-auto">
                        <NavLink>
                            <Link to={'/'} activeClassName="active" >Search</Link>
                        </NavLink>
                        <NavLink>
                            <Link to={'EventSuggest'} >Event Suggestions</Link>
                        </NavLink>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}
