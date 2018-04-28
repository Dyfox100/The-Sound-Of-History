var express = require('express');
var path = require('path');
//var mongodb = require('mongodb');
var request = require("request");
var app = express();
var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
    hosts: ['https://username:password@host:port']
});

var mongoClient = mongodb.MongoClient;
var mclient;

mongoClient.connect('mongodb://52.37.120.142:27017', (err, client1) => {
    if (err) {
        throw err;
    } else {
        mclient = client1;
        console.log("Successfully Connected");
    }
});

// app.get('/songtest', (req, res) => {
//     var db = client.db("top_100_weekly");
//     //console.log("Connected to Mongo");
//     var collection = db.collection("songs");
//     //console.log(count);
//     let date = "2018-03-17";
//     collection.findOne({endDate: date}, (err, result) => {
//         var arraySongs = new Array(15);
//         for (var index = 0; index < 15; index++) {
//             arraySongs[index] = {};
//         }
//         //console.log(arraySongs);
//         //console.log(result);
//         //this is for a date input search by user, hence no date or id accepted
//         for (var key in result) {
//             if (key != "_id" && key != "beginDate" && key != "endDate") {
//                 let lastChar = key.slice(-2)

//                 if (lastChar[0] == "_") {
//                     arraySongs[Number(lastChar[1]) - 1][key.slice(0, -2)] = result[key];
//                     //console.log(result[key]);
//                 } else {
//                     arraySongs[Number(lastChar) - 1][key.slice(0, -3)] = result[key];
//                 //console.log(result[key]);
//                 }
//             }
//         }
//         res.send(arraySongs);
//     });
// });



//app.use(express.static(__dirname + 'my-app/src'));

client.ping({
    requestTimeout: 30000,
}, function(error){
    if (error) {
        console.error("Cluster is down!");
    } else {
        console.log('Everything is okay')
    }
});

app.get('/result/:query', (req, res) => {
    //db connection
    var db = mclient.db("top_100_weekly");
    var collection = db.collection("songs");

    var info = {"update": "this didn´t update"};
    const input = req.params.query;
    //check type of input
    if (input[2] === input[5] && (input[2] === '/' || input[2] === '-')){
        // key for the NYT API
        var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=5a1867eea1154ea0a495d421ea1263a4";

        // set start and end dates based on user input for NYT search
        const dateInputNYTimes =   input.slice(6)  + input.slice(0,2) + input.slice(3,5);
        url = url + "&begin_date=" + dateInputNYTimes + "&end_date=" + dateInputNYTimes;
        const dateInputMongo = input;

        // convert date to a Sunday since start dates are Sundays for weekly charts for Billboard datea
        let date = new Date(dateInputMongo);
        date.setDate(date.getDate()-date.getDay());
        date = date.toJSON().slice(0,10);

        // call to the db
        collection.findOne({beginDate: date}, (err, result) => {
            if (err) {
                console.log("erore");
            }
            console.log(result);
            var arraySongs = new Array(15);
            for (var index = 0; index < 50; index++) {
                arraySongs[index] = {};
            }
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
            // call to the NYT API
            request.get(url, (error, response, body) => {
                if (error) {
                    console.log(error);
                }
                else {
                    let jsonRes = JSON.parse(body);
                    info = jsonRes.response.docs;
                    info = info.map((doc) => {
                        return doc.headline.main;
                    })
                    const jsonToSend =
                    {
                        "songs": arraySongs,
                        "headlines": info
                    }
                    res.send(jsonToSend);
                }
            });
        });

    } else {
        console.log('this is not a date. try again.');
    }
});

// listens on the port for our front end
app.listen(process.env.port || 4001, () => {
  console.log("Listening on Port 4001");
});
