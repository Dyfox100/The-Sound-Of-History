// ----- IMPORTS -----
import React from 'react';
import ReactDOM from 'react-dom';
import ScrollableAnchor from 'react-scrollable-anchor';

import WebFont from 'webfontloader';
import { InputGroup, InputGroupAddon, Button, Input, NavLink, Container, Row, Col } from 'reactstrap';
import { Redirect } from "react-router-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { NavBar } from './decorator.js';

// Import images
import logo from '../img/TSOH.png';
import downArrow from '../img/downArrow.png';
import sixty from '../img/1960s.png';
import seventy from '../img/1970s.png';
import eighty from '../img/1980s.png';
import ninty from '../img/1990s.png';
import thousand from '../img/2000s.png';
import ten from '../img/2010s.png'

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
                        <img src={logo} alt="Sound of History" width="80%" />
                        <SearchBar/>
                        <p>Search a date to explore the soundtrack of history.</p>
                    </Container>
                    <div className="down">
                        <a href="#EventSuggestions">
                            <img src={downArrow} alt="Down Arrow" width="5%"/>
                        </a>
                    </div>
                </div>
                <ScrollableAnchor id={'EventSuggestions'}>
                    <div className="eventSuggestRender">
                        <Container>
                            <EventSuggest/>
                        </Container>
                    </div>
                </ScrollableAnchor>
                <div className="footer">
                    <footer>Made by Team Boat-y</footer>
                </div>
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
                  placeholder="MM/DD/YYYY"
                  value={this.state.value}
                  onChange={this.updateSearch}
                />
                <InputGroupAddon addonType="append">
                    <Button color="light" onClick={this.handleSubmit}>
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
        	<div className="eventSuggest">
        	<h1>Event Suggestions</h1>

    			<Row className="formatRow">
                    <Col>
                        <div className="alignRight">
                            <h2>1960</h2>
            				<ul>
            					{this.EventQuery["1960s"].map((eventObject) => {
            						return (
            							<li>
            								<Link className="links" to={{pathname: '/ResultsPage', state: {
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
                    </Col>
                    <Col>
                        <img className="image" src={sixty} width='75%'/>
                    </Col>
    			</Row>

                <Row className="formatRow">
                    <Col>
                        <img src={seventy} width='75%' class="img-responsive pull-right"/>
                    </Col>
                    <Col>
            			<div>
                            <h2>1970</h2>
            				<ul>
            					{this.EventQuery["1970s"].map((eventObject) => {
            						return (
            							<li>
            								<Link className="links" to={{pathname: '/ResultsPage', state: {
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
                    </Col>
                </Row>

                <Row className="formatRow">
                    <Col className="alignRight">
            			<div>
                            <h2>1980</h2>
            				<ul>
            					{this.EventQuery["1980s"].map((eventObject) => {
            						return (
            							<li>
            								<Link className="links" to={{pathname: '/ResultsPage', state: {
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
                    </Col>
                    <Col>
                        <img className="image" src={eighty} width='75%'/>
                    </Col>
                </Row>

                <Row className="formatRow">
                    <Col>
                        <img className="image" src={ninty} width='75%'/>
                    </Col>
                    <Col>
        			    <div>
                            <h2>1990</h2>
            				<ul>
            					{this.EventQuery["1990s"].map((eventObject) => {
            						return (
            							<li>
            								<Link className="links" to={{pathname: '/ResultsPage', state: {
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
                    </Col>
                </Row>

                <Row className="formatRow">
                    <Col className="alignRight">
            			<div>
                            <h2>2000</h2>
            				<ul>
            					{this.EventQuery["2000s"].map((eventObject) => {
            						return (
            							<li>
            								<Link className="links" to={{pathname: '/ResultsPage', state: {
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
                    </Col>
                    <Col>
                        <img className="image" src={thousand} width='75%'/>
                    </Col>
                </Row>

                <Row className="formatRow">
                    <Col>
                        <img className="image" src={ten} width='75%'/>
                    </Col>
                    <Col>
            			<div>
                            <h2>2010</h2>
            				<ul>
            					{this.EventQuery["2010s"].map((eventObject) => {
            						return (
            							<li>
            								<Link className="links" to={{pathname: '/ResultsPage', state: {
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
                    </Col>
                </Row>
        	</div>
        );
    }
}
