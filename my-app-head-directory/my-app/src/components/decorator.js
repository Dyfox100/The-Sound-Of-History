// ----- IMPORTS -----
import React from 'react';
import ReactDOM from 'react-dom';

import WebFont from 'webfontloader';
import { InputGroup, InputGroupAddon, Button, Input, NavLink, Container, Row, Col, Navbar, Nav, NavItem } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// import components
import { SearchPage } from './searchPage.js'
import { EventSuggest } from './eventSuggestPage.js'

// import css files
import 'bootstrap/dist/css/bootstrap.css';

export class NavBar extends React.Component {
    render(){
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <Nav className="ml-auto">
                        <NavItem>
                            <Link to={'/'} >Search</Link>
                        </NavItem>
                        <NavItem>
                            <Link to={'EventSuggest'}>Event Suggestions</Link>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}
