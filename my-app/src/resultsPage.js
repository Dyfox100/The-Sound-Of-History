import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';

import 'bootstrap/dist/css/bootstrap.css';
import { InputGroup, InputGroupAddon, Button, Input, NavLink } from 'reactstrap';

// import './index.css';

export class ResultsPage extends React.Component {
    queriedItems: "";
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
        return (
            <div>
                <HistoryBox history = {history}/>
                <br/>
                <SongBox songs = {songs}/>
            </div>
        );
    }
    displays(){

    }
}

// export class DateBox extends React.Component {
//     var date = "";

//     render(){
//         return (

//         );
//     }
//     getDate(){

//     }
//     setDate(){

//     }
// }

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
            song = "song" + i.toString();
            artist = "artist" + i.toString();
            peak = "peakPosition" + i.toString();
            last = "lastWeek" + i.toString();
            weeks = this.songs["weeksOnChart" + i.toString()];
            // var rank = {
            //
            // }
            // songList[i-1] = rank;
        }
    }
    render(){
        return (
            <h1>TEST</h1>
            // <div>
            //     <ol>{
            //         this.songs.slice(0,10).map((item) => {
            //             return<li> {item}</li>
            //         })
            //     }
            //     </ol>
            // </div>
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
