var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(__dirname + 'src'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/src/index.html'))
});

app.listen(process.env.port || 4001, () => {
  console.log("Listening on Port 4001");
});
