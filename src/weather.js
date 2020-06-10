'use strict';

require('dotenv').config();
const superagent = require('superagent');

const getWeather = function name(lat,long) {
    const url = `https://api.darksky.net/forecast/${process.env.DARKSKY_API_KEY}/${lat},${long}`

    superagent.get(url)
    .then(data =>{
        // console.log(data.body.daily);
        return data.body.daily.data.map(oneDay =>{
            return new  Weather(oneDay);
        })
    })
}

function Weather (data){
    this.forecast=data.summary;
    this.time = new Date(data.time * 1000).toDateString();
}

module.exports = getWeather;