var express = require('express');
var path = require('path');
var mongodb = require('mongodb');
var request = require("request");
var app = express();

var mongoClient = mongodb.MongoClient;

mongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if (err) {
        throw err;
    } else {
        var db = client.db("top_100_weekly");
        console.log("Connected to Mongo");
        var collection = db.collection("songs");
        collection.count(function(err, count) {
            console.log(count);
        });
    }
});

//app.use(express.static(__dirname + 'my-app/src'));

app.get('/result/:query', (req, res) => {
    var info = {"update": "this didn´t update"};
    const input = req.params.query;
    //check type of input
    if (input[2] === input[5] && (input[2] === '/' || input[2] === '-')){
        //console.log('success!!!');
        //const url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=5a1867eea1154ea0a495d421ea1263a4&begin_date=20000110&end_date=20010113";
        var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=5a1867eea1154ea0a495d421ea1263a4";
        const dateInput =   input.slice(6)  + input.slice(0,2) + input.slice(3,5);
        url = url + "&begin_date=" + dateInput + "&end_date=" + dateInput;
        //const queryObject = {begin_date: dateInput, end_date: dateInput};
        request.get(url, (error, response, body) => {
            if (error) {
                console.log(error);
            }
            else {

                let jsonRes = JSON.parse(body);

                info = jsonRes.response.docs;
                res.send(info);
            }
        });
    } else {
        console.log('this is not a date. try again.');
    }
    // console.log(input);
    // request.get(url, (error, response, body) => {
    //     if (error) {
    //         console.log(error);
    //     }
    //     else {
    //
    //         let jsonRes = JSON.parse(body);
    //         //console.log(jsonRes);
    //         info = jsonRes.response.docs;
    //         res.send(info);
    //     }
    // });
});

app.listen(process.env.port || 4001, () => {
  console.log("Listening on Port 4001");
});
