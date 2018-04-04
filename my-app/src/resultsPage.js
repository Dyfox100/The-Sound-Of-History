import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';

import 'bootstrap/dist/css/bootstrap.css';
import { InputGroup, InputGroupAddon, Button, Input, NavLink } from 'reactstrap';

import './index.css';

class ResultsPage extends React.Component {
    var queriedItems = "";

    render(){
        return (

        );
    }
    displays(){

    }
}

class DateBox extends React.Component {
    var date = "";

    render(){
        return (

        );
    }
    getDate(){

    }
    setDate(){

    }
}

class SongBox extends React.Component {
    var songList = "";

    render(){
        return (

        );
    }
    setSongList(){

    }
    getSongList(){

    }
}

class TweetBox extends React.Component {
    var tweet = "";

    render(){
        return (

        );
    }
    setTweet(){

    }
    getTweet(){

    }
}

WebFont.load({
    google: {
        families: ['Playfair Display', 'serif']
    }
});

ReactDOM.render(
   <ResultsPage />,
   document.getElementById('root')
);