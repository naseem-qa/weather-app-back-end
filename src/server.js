'use strict';

//load environment variables from the .env file
require('dotenv').config();

//Application dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

//application setup
const app = express();
app.use(cors());
app.use(bodyParser.json());

//our dependencies
const getLocation = require('./location.js');
const getWeather = require('./weather.js');

//routes
app.post('/location', locationHandler);
app.post('/weather', weatherHandler);


function locationHandler(req,res) {
    getLocation(req.body.cityName)
      .then(locationInfo =>{
        res.status(200).send(locationInfo);
      })
}

function weatherHandler(req,res){
  getWeather(req.body.lat, req.body.lng)
  .then(weatherInfo=>{
    res.status(200).send(weatherInfo);
  })
  console.log(req.body)
}

module.exports = {
  server: app,
  start: port => {
    let PORT = port || process.env.PORT || 3030;
    app.listen(PORT, () => console.log(`welcome in my world, named ${PORT}`));
  }
}