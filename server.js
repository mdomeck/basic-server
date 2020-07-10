'use strict';

// this will being in my express library
const express = require('express');

// bring in the dot env library
// the job of this library is to find the .env file and get the variables out of it so we can use them in our JS file
require('dotenv').config();

// this gives us a variable we can use to run all the methods that are in the express library
const app = express();

// this lets us serve a websitefrom a directory
app.use(express.static('./public'));

// the dotenv library lets us grab PORT var from the .env using the magic works process.env.variableName
const PORT = process.env.PORT;
 
app.get('/', function (request, response) {
  response.send('Hello World')
});

app.get('/bananas', (request, response) => {
  response.send('I am bananas about bananas');
});
 

// turn on the server
app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});

