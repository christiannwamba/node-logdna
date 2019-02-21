
'use strict';
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Logger = require('logdna');
const log = Logger.setupDefaultLogger(process.env.KEY, {});
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(cors());
app.use(express.static('public'));

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.post('/loguser', (req, res) => {
  if(req.body){
    log.log("User Logged In Successfully!")
    res.json("User logged!");
  }
});
app.listen(8000);
console.log('Serving on port 8000');

/**
 * 
 *   if(req.body){
    log.log("User Logged In Successfully!")
  }else{
    log.log("Login Failed!!");
  }
 */