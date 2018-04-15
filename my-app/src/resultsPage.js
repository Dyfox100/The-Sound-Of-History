import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';

import 'bootstrap/dist/css/bootstrap.css';
import { InputGroup, InputGroupAddon, Button, Input, NavLink } from 'reactstrap';

// import './index.css';

export class ResultsPage extends React.Component {
    //var queriedItems = "";
    render(){
        const history = ['1', '2','3','4','5','6','7','8','9','10']
        return (
            <div>
                <HistoryBox history = {history}/>
            </div>
        );
    }
    displays(){

    }
}

// class DateBox extends React.Component {
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

// class SongBox extends React.Component {
//     var songList = "";

//     render(){
//         return (

//         );
//     }
//     setSongList(){

//     }
//     getSongList(){

//     }
// }

class HistoryBox extends React.Component {
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

