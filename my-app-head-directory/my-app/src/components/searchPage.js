// ----- IMPORTS -----
import React from 'react';
import ReactDOM from 'react-dom';

import WebFont from 'webfontloader';
import { InputGroup, InputGroupAddon, Button, Input, NavLink } from 'reactstrap';
import { Redirect } from "react-router-dom";

// import css files
import '../index.css';
import 'bootstrap/dist/css/bootstrap.css';
// ----- END OF IMPORTS -----

// ----- INTERFACE -----
export class SearchPage extends React.Component {
    render(){
      return (
        <div>
          <SearchBar/>
          <br/>
          <DescriptionBox/>
        </div>
      );
    }
}
// ----- END OF INTERFACE -----

export class DescriptionBox extends React.Component {
    constructor(props){
        super(props);
        this.description = "Please update the project description here.";
    }

    render(){
       return (
          <div>
             <p>{this.description}</p>
          </div>
       );
    }
}

export class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: '',
            ready: false
        };
        this.updateSearch = this.updateSearch.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateSearch(event){
        this.setState({value: event.target.value});
    }

    handleSubmit(event){
        alert('This is what was searched: ' + this.state.value);
        event.preventDefault();
        this.setState({ready: true})
    }

    render(){
        return (
          <div id="searchBox">
            <InputGroup>
                <Input
                  type="text"
                  value={this.state.value}
                  onChange={this.updateSearch}
                />
                <InputGroupAddon addonType="append">
                    <Button color="secondary" onClick={this.handleSubmit}>
                    <NavLink> Search </NavLink> </Button>
                </InputGroupAddon>
            </InputGroup>
            <br/>
            {this.state.ready && ( <Redirect to={{
                pathname: "/ResultsPage",
                state: this.state.value
            }}  />)}
          </div>
        );
    }
}
