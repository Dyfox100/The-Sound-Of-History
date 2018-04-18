import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';

import 'bootstrap/dist/css/bootstrap.css';
import { InputGroup, InputGroupAddon, Button, Input, NavLink } from 'reactstrap';

// import './index.css';

export class ResultsPage extends React.Component {
    queriedItems: "";
    state: {"test":"qqq"};
    constructor(props){
        super(props);
        this.state = {"data":[]};
    }
    componentDidMount = () => {
      this.info = this.getInfo();
    }

    getInfo = () => {
      fetch("result", {
        headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
  }).then((res) => res.json()).then(data => this.setState({"data": data.ASDFAF}));
    }
    render(){
        const history = ['1', '2','3','4','5','6','7','8','9','10'];
        const songs = {
           song1: "This is a test song",
           artist1: "This is an artist",
           peakPosition1: "This is a peak position",
           lastWeek1: "This is last week",
           weeksOnChart1: "This is weeks",
           song2: "This is a test song 2",
           artist2: "This is an artist 2",
           peakPosition2: "This is a peak position 2",
           lastWeek2: "This is last week 2",
           weeksOnChart2: "This is weeks 2"
        };
        const date = "2017-04-30";
        return (
          <div>
              <DateBox date= {date}/>
              <div>
                  <HistoryBox history = {history}/>
                  <br/>
                  <SongBox songs = {songs}/>
              </div>
              <p>{this.state.data}</p>
          </div>
        );
    }
    displays(){

    }
}

export class DateBox extends React.Component {
    constructor(props) {
      super(props);
      this.date = this.props.date;
      this.parseDates = this.parseDates.bind(this);
    }
    parseDates() {
        let months = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'];

        let year = this.date.slice(0, 4);
        let day = this.date.slice(8, 10);
        let month = months[Number(this.date.slice(5, 7)) -1];

        return month + " " + day + ", " + year;
    }

    render(){
        return (
          <div>
              <h1>The Sound of {this.parseDates()}</h1>
          </div>
        );
    }
    getDate(){

    }
    setDate(){

    }
}

export class SongBox extends React.Component {
    constructor(props){
        super(props);
        this.songs = this.props.songs;
        this.parseSongs = this.parseSongs.bind(this);
    }
    parseSongs(){
        var song = "";
        var artist = "";
        var peak = "";
        var last = "";
        var weeks = "";
        let songList = []

        // store songs/artists/info in a list of objects
        for (var i=1; i<3; i++){
            let songTemp = this.songs["song" + i.toString()];
            let artistTemp = this.songs["artist" + i.toString()];
            let peakTemp = this.songs["peakPosition" + i.toString()];
            let lastTemp = this.songs["lastWeek" + i.toString()];
            let weeksTemp = this.songs["weeksOnChart" + i.toString()];

            let rank = {
                song: songTemp,
                artist: artistTemp,
                peak: peakTemp,
                last: lastTemp,
                weeks: weeksTemp
            }

            songList.push(rank);
        }
        return songList;
    }

    render(){
        return (
          <div>
            <h1>Songs</h1>
                <div>
                    <ol>
                        {
                            this.parseSongs().map((songObject) => {
                                return <li>{songObject.song}</li>
                        })
                      }
                  </ol>
                </div>
              </div>
        );
    }
    setSongList(){

    }
    getSongList(){

    }
}

export class HistoryBox extends React.Component {
    constructor(props){
        super(props);
        this.history = this.props.history;
    }

    render(){
        return (
            <div>
                <h1>
                    {this.history[0]}
                </h1>
                <ul>{
                    this.history.slice(1,10).map((item) => {
                        return<li> {item}</li>
                    })
                }
                </ul>

            </div>
        );
    }

    setHistory(){

    }
    getHistory(){

    }
}

WebFont.load({
    google: {
        families: ['Playfair Display', 'serif']
    }
});
