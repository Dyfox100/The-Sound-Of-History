var express = require('express');
var path = require('path');
var mongodb = require('mongodb');
var request = require("request");
var app = express();

var mongoClient = mongodb.MongoClient;
var client;

mongoClient.connect('mongodb://localhost:27017', (err, client1) => {
    if (err) {
        throw err;
    } else {
        client = client1;
    }
});

app.get('/songtest', (req, res) => {
    var db = client.db("top_100_weekly");
    //console.log("Connected to Mongo");
    var collection = db.collection("songs");
    //console.log(count);
    let date = "2018-03-17";
    collection.findOne({endDate: date}, (err, result) => {
        var arraySongs = new Array(15);
        for (var index = 0; index < 15; index++) {
            arraySongs[index] = {};
        }
        //console.log(arraySongs);
        //console.log(result);
        //this is for a date input search by user, hence no date or id accepted
        for (var key in result) {
            if (key != "_id" && key != "beginDate" && key != "endDate") {
                let lastChar = key.slice(-2)

                if (lastChar[0] == "_") {
                    arraySongs[Number(lastChar[1]) - 1][key.slice(0, -2)] = result[key];
                    //console.log(result[key]);
                } else {
                    arraySongs[Number(lastChar) - 1][key.slice(0, -3)] = result[key];
                //console.log(result[key]);
                }
            }
        }
        res.send(arraySongs);
    });
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
