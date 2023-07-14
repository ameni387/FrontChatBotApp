// app.js
const express = require('express');
require('./config/connect')
const bodyParser = require("body-parser")
const MessageRoute = require('./route/routes');
const app = express();
// Enable CORS for all routes
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json())


app.use(MessageRoute)


// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});