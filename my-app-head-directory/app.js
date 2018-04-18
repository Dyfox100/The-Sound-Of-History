var express = require('express');
var path = require('path');

var app = express();

//app.use(express.static(__dirname + 'my-app/src'));

app.get('/result', (req, res) => {
  res.json({"ASDFAF": "tester"});
});

app.listen(process.env.port || 4001, () => {
  console.log("Listening on Port 4001");
});
