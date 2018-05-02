// ----- IMPORTS -----
import React from 'react';
import ReactDOM from 'react-dom';

import WebFont from 'webfontloader';
import { InputGroup, InputGroupAddon, Button, Input, NavLink, Container, Row, Col, Navbar, Nav } from 'reactstrap';
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
                <Navbar color="white" expand="md">
                    <Nav className="ml-auto navbarFormat">
                        <NavLink>
                            <Link to={'/'} >Search</Link>
                        </NavLink>
                        <NavLink>
                            <Link to={'EventSuggest'}>Event Suggestions</Link>
                        </NavLink>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}

// styles = {
//     base: {
//         Link:
//     }
// }
