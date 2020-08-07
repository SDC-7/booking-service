const express = require('express');
const { seedData } = require('../database/seedFakeData');

const app = express();
const port = 3002;

// seedData();

app.listen(port);
console.log('Now listening on port 3000');
