// ----- IMPORTS -----
import React from 'react';
import ReactDOM from 'react-dom';

import WebFont from 'webfontloader';
import { InputGroup, InputGroupAddon, Button, Input, NavLink } from 'reactstrap';

// import css files
import '../index.css';
import 'bootstrap/dist/css/bootstrap.css';
// ----- END OF IMPORTS -----

// ----- INTERFACE -----
export class ResultsPage extends React.Component {

    constructor(props){
        super(props);
        //date passed in from search page
        var date = this.props.location.state;
        //makes sure format matches backend requirements
        switch(date.length) {
            case 10:
                if (date[2] === "/") {
                    date = date.slice(0, 2) + "-" + date.slice(3, 5) + "-" + date.slice(6);
                }
                break;
            case 8:
                date = "0" + date.slice(0,1) + "-0" + date.slice(2, 3) + "-" + date.slice(4);
                break;
            case 9:
                if (date[1] === "-" || date[1] === "/") {
                    date = "0" + date.slice(0,1) + "-" + date.slice(2, 4) + "-" + date.slice(5);
                }
                else if (date[4] === "-" || date[4] === "/"){
                    date = date.slice(0, 2) + "-0" + date.slice(3, 4) + "-" + date.slice(5);
                }
                break;
        }
        console.log(date);
        this.state = {date: date};
        this.getInfo = this.getInfo.bind(this);
    }

    componentDidMount = () => {
      this.getInfo();
    }

    getInfo = () => {
    //suffix of /result is date
        //pass through null for end date and query values with search bar request
        fetch("/result?begindate=" + this.state.date + "&enddate=&nytquery=",{
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
              <DateBox date= {this.state.date}/>
              <div className="historyBox">
                {this.state.headlines &&  <HistoryBox history = {this.state.headlines}/>}
              </div>
              <br/>
              <div className="songBox">
                {this.state.songs && <SongBox songs = {this.state.songs}/>}
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
            <h1>Top 100 Billboard Chart</h1>
                <div>
                    <ol>
                         {
                            this.songs.map((songInfo) => {
                                return <li>{songInfo.title} by {songInfo.artist}</li>
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
            <h1>New York Times Headlines</h1>
                <ul>{
                        this.history.map((item) => {
                        return<li> {item}</li>
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
