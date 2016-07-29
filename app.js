const fs = require('fs');
const path = require('path');

var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/ES', (req, res) => {
  res.header('Content-Type', 'text/html');
  fs.createReadStream(path.resolve('ES6.html')).pipe(res);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});