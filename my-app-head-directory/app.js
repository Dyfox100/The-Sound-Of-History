var express = require('express');
var path = require('path');
const request = require("request");
var app = express();

//app.use(express.static(__dirname + 'my-app/src'));

app.get('/result/:id', (req, res) => {
    const url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=5a1867eea1154ea0a495d421ea1263a4&begin_date=20000110&end_date=20010113";
    var info = {"update": "this didn´t update"};
    request.get(url, (error, response, body) => {
        if (error) {
            console.error(error);
        }
        else {
            let jsonRes = JSON.parse(body);
            info = jsonRes.response.docs;
            res.send(info);
        }
    });
});

app.listen(process.env.port || 4001, () => {
  console.log("Listening on Port 4001");
});
