// ----- END IMPORTS -----
import React from 'react';
import ReactDOM from 'react-dom';

import WebFont from 'webfontloader';
import { InputGroup, InputGroupAddon, Button, Input, NavLink } from 'reactstrap';

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
    	// console.log(EventQuery["2010s"][0].Event);
    	// let eventLength = console.log((this.EventQuery["2010s"]).length);
        return (
        	<div>
        	<h1>Event Suggest Page</h1>
        		<h2>1960</h2>
        			<div>
        				<ul>
        					{this.EventQuery["1960s"].map((eventObject) => {
        						return (
        							<li>
        								{eventObject.Year}: {eventObject.Event}
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
        								{eventObject.Year}: {eventObject.Event}
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
        								{eventObject.Year}: {eventObject.Event}
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
        								{eventObject.Year}: {eventObject.Event}
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
        								{eventObject.Year}: {eventObject.Event}
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
        								{eventObject.Year}: {eventObject.Event}
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
// ----- END OF INTERFACE -----

// class YearBox extends React.Component {
//    var yearName = "";
//
//    render(){
//       return (
//
//       );
//    }
//    setYearName(){
//
//    }
//    yearEvents(){
//
//    }
// }
//
// WebFont.load({
//     google: {
//         families: ['Playfair Display', 'serif']
//     }
// });
//
// ReactDOM.render(
//    <EventSuggest />,
//    document.getElementById('root')
// );
