// ----- IMPORTS -----
import React from 'react';
import ReactDOM from 'react-dom';

import WebFont from 'webfontloader';
import { InputGroup, InputGroupAddon, Button, Input, NavLink } from 'reactstrap';
import { Redirect } from "react-router-dom";
import BackgroundImage from 'react-background-image-loader';

// import css files
import '../index.css';
import 'bootstrap/dist/css/bootstrap.css';

WebFont.load({
    google: {
        families: ['Rajdhani', 'sans-serif'],
    }
});

// ----- END OF IMPORTS -----

// ----- INTERFACE -----
export class SearchPage extends React.Component {
    render(){
        return (
            <div>
                <div className="centerPage">
                    <h1 className="centerContent">The Sound of History</h1>
                    <div className="centerSearch">
                        <SearchBar/>
                    </div>
                    <div className="centerContent">
                        <DescriptionBox/>
                    </div>
                </div>
            </div>
        );
    }
}
// ----- END OF INTERFACE -----

export class DescriptionBox extends React.Component {
    constructor(props){
        super(props);
        this.description = "Search a date to explore the soundtrack of United States history.";
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
        event.preventDefault();
        this.setState({ready: true})
    }

    render(){
        return (
          <div id="searchBox">
            <InputGroup>
                <Input
                  type="text"
                  placeholder="DD/MM/YYYY"
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
