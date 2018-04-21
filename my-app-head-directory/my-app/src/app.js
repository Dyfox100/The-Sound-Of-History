var express = require('express');

var app = express();

app.use(express.static(__dirname + 'src'));

app.listen(process.env.port || 4001, () => {
  console.log("Listening on Port 4001");
});
