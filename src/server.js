'use strict';

//load environment variables from the .env file
require('dotenv').config();

//Application dependencies
const express = require('express');
const cors = require('cors');

//application setup
const app = express();
app.use(cors());

//our dependencies
const getLocation = require('./location.js');
const getWeather = require('./weather.js');

//rout
app.get('/location', locationHandler);
app.get('/weather', weatherHandler)


function locationHandler(req,res) {
    getLocation('amman')
      // console.log('ibrahim e5taser', req.query)
}

function weatherHandler(req,res){
  getWeather('31.9515694','35.9239625')
}

module.exports = {
  server: app,
  start: port => {
    let PORT = port || process.env.PORT || 3030;
    app.listen(PORT, () => console.log(`welcome in my world, named ${PORT}`));
  }
}