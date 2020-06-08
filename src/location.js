'use strict';

require('dotenv').config();
const superagent = require('superagent');

const getLocation = function (cityName){
    const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.GEOCODE_API_KEY}&q=${cityName}&format=json`
    
    superagent.get(url)
    .then(data =>{
        let location = new Location (data.body[0])
    }) 
}

function Location (data){
   this.displayName = data.display_name;
   this.latitude = data.lat;
   this.longitude = data.lon;
}

module.exports = getLocation;


