var express = require('express');
var path = require('path');
var mongodb = require('mongodb');
var request = require("request");
var app = express();
var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
    hosts: ['http://54.245.181.174:9200']
});

var mongoClient = mongodb.MongoClient;
var mclient;

mongoClient.connect('mongodb://54.190.43.78:27017', (err, client1) => {
    if (err) {
        throw err;
    } else {
        mclient = client1;
        console.log("Successfully Connected");
    }
});

client.ping({
    requestTimeout: 30000,
}, function(error){
    if (error) {
        console.error("Cluster is down!");
    } else {
        console.log('Everything is okay')
    }
});

client.search({
    index: "bbtop100",
    type: "songs",
    q: "Drake"
    }
).then((body) => console.log(body.hits.hits));


app.get('/result', (req, res) => {
    //db connection
    var db = mclient.db("top_100_weekly");
    var collection = db.collection("songs");
    var info = {"update": "this didn´t update"};
    const beginDateInput = req.query.begindate;
    const endDateInput = req.query.enddate;
    const queryInput = req.query.nytquery;
    console.log("beginDate: " + req.query.begindate);
    console.log("query: " + req.query.nytquery);
    console.log("enddate: " + req.query.enddate);
    //check type of input
    if (beginDateInput[2] === beginDateInput[5] && (beginDateInput[2] === '-')){
        // key for the NYT API
        var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=5a1867eea1154ea0a495d421ea1263a4";

         // set start and end dates based on input
        const beginDate = beginDateInput.slice(6)  + beginDateInput.slice(0,2) + beginDateInput.slice(3,5);

        if (endDateInput !== "") {
            const endDate =  endDateInput.slice(6) + endDateInput.slice(0,2) + endDateInput.slice(3,5);
            url = url + "&begin_date=" + beginDate + "&end_date=" + endDate + "&q=" + queryInput;
        } else {
            url = url + "&begin_date=" + beginDate + "&end_date=" + beginDate;
        }
        console.log("URL: " + url);

        // convert date to a Sunday since start dates are Sundays for weekly charts for Billboard datea
        let date = new Date(beginDateInput);
        date.setDate(date.getDate()-date.getDay());
        date = date.toJSON().slice(0,10);


        // call to the db
        collection.findOne({beginDate: date}, (err, result) => {
            if (err) {
                console.log("error");
            }
            // console.log(result);
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
                        return doc.headline.main + ": " + doc.snippet;
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
        //elastic search for song name.
        client.search
    }
});

// listens on the port for our front end
app.listen(process.env.port || 4001, () => {
  console.log("Listening on Port 4001");
});
