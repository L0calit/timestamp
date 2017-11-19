// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

app.get("/", function (request, response) {
  response.send(time);
});

app.get("/:str", function (request, response) {
  var local = Math.round((new Date(request.params.str * 1000)).getTime()/1000);
  var date = new Date(request.params.str * 1000);
  var date_act = new Date(request.params.str);
  if (local > 0) {  
    time.unix = local;
    time.natural = date.toDateString();
  } else if (date_act > 0) {  
    time.unix = Math.round(date_act.getTime()/1000);
    time.natural = date_act.toDateString();
  } else {
    time.unix = null;
    time.natural = null;
  }
  response.send(time);
});

// Simple in-memory store for now
var time = {
  unix: "null",
  natural: "null"
};

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
