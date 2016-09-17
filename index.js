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
/*
app.use(express.static( 'index.html', { maxAge: oneDay }));
app.use(express.static( 'systemjs.config.js', { maxAge: oneDay }));
app.use(express.static( 'node_modules', { maxAge: oneDay }));
app.use(express.static( 'app', { maxAge: oneDay }));
*/

// api
app.post('/api/character', function(req, res) {
});
app.get('/api/submitted-characters', function(req, res) {
});

// load the app
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

// start
app.set('port', (process.env.PORT || 8000));
app.listen(app.get('port'));
console.log('Listening on port ' + app.get('port') + '...');
