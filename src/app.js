const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes/index');


// Using Body Parser
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

// Routes
app.use('/', routes);

// Exporting the Express App
module.exports = app;
