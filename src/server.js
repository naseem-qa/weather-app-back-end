'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

module.exports = {
  server: app,
  start: port => {
    let PORT = port || process.env.PORT || 3030;
    app.listen(PORT, () => console.log(`welcome in my world, named ${PORT}`));
  }
}