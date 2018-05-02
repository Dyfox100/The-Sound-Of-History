// ----- END IMPORTS -----
import React from 'react';
import ReactDOM from 'react-dom';
//ALL

import WebFont from 'webfontloader';
import { InputGroup, InputGroupAddon, Button, Input, NavLink } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


// Import json Event Suggest file with hardCode
import EventQuery from '../attributes/EventQuery.json';

// import css files
import '../index.css';
import 'bootstrap/dist/css/bootstrap.css';
// ----- END OF IMPORTS -----

// ----- INTERFACE -----
export class EventSuggest extends React.Component {
	constructor(props){
		super(props)
		this.EventQuery = EventQuery;
	}
    render(){
        return (
        	<div>
        	<h1 className="centerContent">Event Suggestions Page</h1>
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

WebFont.load({
    google: {
        families: ['Playfair Display', 'serif'],
    }
});
