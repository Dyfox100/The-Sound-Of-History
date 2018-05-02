// ----- IMPORTS -----
import React from 'react';
import ReactDOM from 'react-dom';

import WebFont from 'webfontloader';
import { InputGroup, InputGroupAddon, Button, Input, NavLink} from 'reactstrap';
import { Container, Row, Col } from "reactstrap";
import { NavBar } from './decorator.js';

// import css files
import '../index.css';
import 'bootstrap/dist/css/bootstrap.css';
// ----- END OF IMPORTS -----

// ----- INTERFACE -----
export class ResultsPage extends React.Component {

    constructor(props){
        super(props);
        var beginDate;
        var endDate;
        var query;
        this.state = {
            beginDate: "",
            endDate: "",
            query: ""

        };
        //date passed in from search page
        if (typeof this.props.location.state == "string"){
            beginDate = this.props.location.state;
            //makes sure format matches backend requirements mm-dd-yyyy
            switch(beginDate.length) {
                case 10:
                    if (beginDate[2] === "/") {
                        beginDate = beginDate.slice(0, 2) + "-" + beginDate.slice(3, 5) + "-" + beginDate.slice(6);
                    }
                    break;
                case 8:
                    if (beginDate.includes("-") || beginDate.includes("/")){
                        beginDate = "0" + beginDate.slice(0,1) + "-0" + beginDate.slice(2, 3) + "-" + beginDate.slice(4);
                    }
                    break;
                case 9:
                    if (beginDate[1] === "-" || beginDate[1] === "/") {
                        beginDate = "0" + beginDate.slice(0,1) + "-" + beginDate.slice(2, 4) + "-" + beginDate.slice(5);
                    }
                    else if (beginDate[4] === "-" || beginDate[4] === "/"){
                        beginDate = beginDate.slice(0, 2) + "-0" + beginDate.slice(3, 4) + "-" + beginDate.slice(5);
                    }
                    break;
            }
        }else{
            //query comes frome event suggest
            beginDate = this.props.location.state.begindate;
            beginDate = beginDate.slice(4,6) + "-" + beginDate.slice(6) + "-" + beginDate.slice(0,4);
            endDate = this.props.location.state.enddate;
            endDate = endDate.slice(4,6) + "-" + endDate.slice(6) + "-" + endDate.slice(0,4);
            query = this.props.location.state.query;
            this.state.endDate = endDate;
            this.state.query = query;
        }

        this.state.beginDate = beginDate;
        this.getInfo = this.getInfo.bind(this);
        console.log(this.state);
    }

    componentDidMount = () => {
      this.getInfo();
    }

    getInfo = () => {
    //suffix of /result is date
        //pass through string to node server
        fetch("/result?begindate=" + this.state.beginDate + "&enddate=" + this.state.endDate + "&nytquery=" + this.state.query,{
            headers:
            {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then((res) => res.json()).then(headlinesAndSongs => {
            this.setState(
            {
              "headlines": headlinesAndSongs.headlines,
              "songs":headlinesAndSongs.songs
            });
        });
    }
    render(){
        return (
            <div>

                <div className="results-banner">
                    <NavBar />
                </div>
                <DateBox className="dateBox" date= {this.state.beginDate}/>
                    <div className="resultsPage">
                        <Row>
                        <Col>
                            <div className="historyBox">
                                {this.state.headlines &&  <HistoryBox history = {this.state.headlines}/>}
                            </div>
                        </Col>
                            <Col>
                                <div className="songBox">
                                    {this.state.songs && <SongBox songs = {this.state.songs}/>}
                                </div>
                            </Col>
                        </Row>
                    </div>
            </div>
        );
    }
}
// ----- END OF INTERFACE -----

export class DateBox extends React.Component {
    constructor(props) {
      super(props);
      this.date = this.props.date;
      this.parseDates = this.parseDates.bind(this);
    }
    parseDates() {
        //numbers as input, but want to display month
        let months = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'];

        let year = this.date.slice(6);
        let day = this.date.slice(3, 5);
        let month = months[Number(this.date.slice(0, 2)) -1];

        return month + " " + day + ", " + year;
    }

    render(){
        return (
          <div className= "dateBox">
              <h1>The Sound of {this.parseDates()}</h1>
              <hr/>
          </div>
        );
    }
}

export class SongBox extends React.Component {
    constructor(props){
        super(props);
        this.songs = this.props.songs;
    }

    render(){
        return (
          <div className="songsBox">
            <h2>Billboard Chart Top 50</h2>
                <div>
                    <ol>
                         {
                            this.songs.map((songInfo) => {
                                return <li className="song">{songInfo.title} by {songInfo.artist}</li>
                            })
                      }
                  </ol>
                </div>
              </div>
        );
    }
}

export class HistoryBox extends React.Component {
    constructor(props){
        super(props);
        this.history = this.props.history;
        console.log(this.history);
    }

    render(){
        return (
            <div className="historyBox">
            <h2 className>New York Times Headlines</h2>
                <ul>{
                        this.history.map((item) => {
                        return<li className="history"> {item} <br/> <br/>  </li>
                    })
                }
                </ul>

            </div>
        );
    }
}
/*
WebFont.load({
    google: {
        families: ['Playfair Display', 'serif'],
    }

});*/
