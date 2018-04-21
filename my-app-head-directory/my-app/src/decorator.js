import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';

import 'bootstrap/dist/css/bootstrap.css';
import { InputGroup, InputGroupAddon, Button, Input, NavLink, Container, Row, Col, Navbar, Nav, NavItem } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { SearchPage } from './components/searchPage.js'
import { EventSuggest } from './eventSuggestPage.js'


// class Title extends React.Component {
//    var titleName = "";
//
//    render(){
//       return(
//
//       );
//    }
//
//    setTitleName(){
//
//    }
// }

// class SearchDataBase extends React.Component {
//    var queryInput = ""
//
//    render(){
//       return (
//
//       );
//    }
//
//    query(){
//
//    }
//    sendRequest(){
//
//    }
// }

// class Button extends React.Component {
//    var buttonName = "";
//    var updateButton;
//
//    render(){
//       return (
//
//       );
//    }
//    setButtonName(){
//
//    }
//    setUpdateButton(){
//
//    }
//    getUpdateButton(){
//
//    }
// }

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
