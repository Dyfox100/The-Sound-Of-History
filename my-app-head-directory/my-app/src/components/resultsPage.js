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
        this.state = {date: this.props.location.state};
    }
    componentDidMount = () => {
      this.info = this.getInfo();
    }

    getInfo = () => {
    //suffix of /result is date
        fetch("/result/" + this.props.location.state,{
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
            console.log(this.state.songs);
        });
    }
    render(){
        return (
          <div>
              <DateBox date= {this.state.date}/>
              <div>
                {this.state.headlines &&  <HistoryBox history = {this.state.headlines}/>}
                <br/>
                <SongBox songs = {this.state.songs}/>
              </div>

              <p>{this.props.location.state}</p>
          </div>
        );
    }
    displays(){

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
        let months = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'];

        let year = this.date.slice(6);
        let day = this.date.slice(3, 5);
        let month = months[Number(this.date.slice(0, 2)) -1];

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
                            this.songs.map((songInfo) => {
                                return <li>{songInfo.artist}</li>
                            })
                            //this.parseSongs().map((songObject) => {
                                //return <li>{songObject.song}</li>
                        //})
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
        console.log(this.history);
    }

    render(){
        return (
            <div>
            <h1>Events</h1>
                <ul>{
                        this.history.map((item) => {
                        console.log(item);
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
/*
WebFont.load({
    google: {
        families: ['Playfair Display', 'serif']
    }
    console.log("Executed Correctly");
});*/
