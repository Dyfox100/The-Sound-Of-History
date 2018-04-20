import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';

import 'bootstrap/dist/css/bootstrap.css';
import { InputGroup, InputGroupAddon, Button, Input, NavLink, Container, Row, Col, Navbar, Nav, NavItem } from 'reactstrap';

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
    // var stateName = "";

    render(){
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <Nav className="ml-auto">
                        <NavItem>
                            <NavLink href="https://www.google.com/">Search</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://www.instagram.com/">Event Suggestions</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        );
    }
   // redirect(){
   //
   // }
   // getStateName(){
   //
   // }
   // setStateName(){
   //
   // }
}
