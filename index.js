// express
var express = require('express');
var mongoose = require('mongoose');

// database
mongoose.connect('mongodb://localhost:27017');
var models = require('./models/CharacterSubmission');

// application
var app = express();
var oneDay = 8.64e+7;

// static resources needed by Angular
app.use(express.static( __dirname + '/', { maxAge: oneDay }));

// api
app.post('/api/character', function(req, res) {
});
app.get('/api/submitted-characters', function(req, res) {
});

// NOTE: In a production application, we'd likely want to separate the API
// server from the web server for scalability of both performance and the
// codebase

// load the app
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

// start
app.set('port', (process.env.PORT || 8000));
app.listen(app.get('port'));
console.log('Listening on port ' + app.get('port') + '...');
