'use strict';

require('dotenv').config();
const superagent = require('superagent');

const getWeather = function name(cityName) {
    const url = `https://api.darksky.net/forecast/${process.env.DARKSKY_API_KEY}/${cityName.latitude},${cityName.longitude}`

    superagent.get(url)
    then(data =>{
        console.log(data)
    })
}