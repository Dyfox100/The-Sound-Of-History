// ----- IMPORTS -----
import React from 'react';
import ReactDOM from 'react-dom';
import ScrollableAnchor from 'react-scrollable-anchor'

import WebFont from 'webfontloader';
import { InputGroup, InputGroupAddon, Button, Input, NavLink, Container } from 'reactstrap';
import { Redirect } from "react-router-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { NavBar } from './decorator.js'


// Import json Event Suggest file with hardCode
import EventQuery from '../attributes/EventQuery.json';

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
                <NavBar />
                <div className="searchPage search-background">
                    <Container>
                        <h1>The Sound of History</h1>
                        <SearchBar/>
                        <p>Search a date to explore the soundtrack of United States history.</p>
                        <div className="down">
                            <a href="#downEvents">More Events</a>
                        </div>
                    </Container>
                </div>
                <ScrollableAnchor id ={'downEvents'}>
                    <div className="eventSuggest">
                        <EventSuggest/>
                    </div>
                </ScrollableAnchor>
            </div>
        );
    }
}
// ----- END OF INTERFACE -----

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

export class EventSuggest extends React.Component {
	constructor(props){
		super(props)
		this.EventQuery = EventQuery;
	}
    render(){
        return (
        	<div>
        	<h1 className="centerContent">Event Suggestions</h1>
        		<h2>1960</h2>
        			<div>
        				<ul>
        					{this.EventQuery["1960s"].map((eventObject) => {
        						return (
        							<li>
        								<Link to={{pathname: '/ResultsPage', state: {
                                                begindate: eventObject.BeginDate,
                                                enddate: eventObject.EndDate,
                                                query: eventObject.Query
                                            }
                                        }}>{eventObject.Year}: {eventObject.Event}</Link>
          							</li>
        						)
        					})
        					}
        				</ul>
        			</div>
        		<h2>1970</h2>
        			<div>
        				<ul>
        					{this.EventQuery["1970s"].map((eventObject) => {
        						return (
        							<li>
        								<Link to={{pathname: '/ResultsPage', state: {
                                                begindate: eventObject.BeginDate,
                                                enddate: eventObject.EndDate,
                                                query: eventObject.Query
                                            }
                                        }}>{eventObject.Year}: {eventObject.Event}</Link>
          							</li>
        						)
        					})
        					}
        				</ul>
        			</div>
        		<h2>1980</h2>
        			<div>
        				<ul>
        					{this.EventQuery["1980s"].map((eventObject) => {
        						return (
        							<li>
        								<Link to={{pathname: '/ResultsPage', state: {
                                                begindate: eventObject.BeginDate,
                                                enddate: eventObject.EndDate,
                                                query: eventObject.Query
                                            }
                                        }}>{eventObject.Year}: {eventObject.Event}</Link>
          							</li>
        						)
        					})
        					}
        				</ul>
        			</div>
        		<h2>1990</h2>
        			<div>
        				<ul>
        					{this.EventQuery["1990s"].map((eventObject) => {
        						return (
        							<li>
        								<Link to={{pathname: '/ResultsPage', state: {
                                                begindate: eventObject.BeginDate,
                                                enddate: eventObject.EndDate,
                                                query: eventObject.Query
                                            }
                                        }}>{eventObject.Year}: {eventObject.Event}</Link>
          							</li>
        						)
        					})
        					}
        				</ul>
        			</div>
        		<h2>2000</h2>
        			<div>
        				<ul>
        					{this.EventQuery["2000s"].map((eventObject) => {
        						return (
        							<li>
        								<Link to={{pathname: '/ResultsPage', state: {
                                                begindate: eventObject.BeginDate,
                                                enddate: eventObject.EndDate,
                                                query: eventObject.Query
                                            }
                                        }}>{eventObject.Year}: {eventObject.Event}</Link>
          							</li>
        						)
        					})
        					}
        				</ul>
        			</div>
        		<h2>2010</h2>
        			<div>
        				<ul>
        					{this.EventQuery["2010s"].map((eventObject) => {
        						return (
        							<li>
        								<Link to={{pathname: '/ResultsPage', state: {
                                                begindate: eventObject.BeginDate,
                                                enddate: eventObject.EndDate,
                                                query: eventObject.Query
                                            }
                                        }}>{eventObject.Year}: {eventObject.Event}</Link>
          							</li>
        						)
        					})
        					}
        				</ul>
        			</div>
        	</div>


        );
    }
}
