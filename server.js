var path = require('path');
var express = require('express');
var app = express();

app.get('/locales/:lng/*.json', function (req, res, next) {
  res.sendFile(path.join(__dirname, 'src/' + req.originalUrl));
});

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'src/index.html'));
});

var server = app.listen(3001, function () {
  console.log('Server running at http://localhost:' + server.address().port)
})
