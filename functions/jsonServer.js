const express = require('express');
const serverless = require('serverless-http');
const jsonServer = require('json-server');
const app = express();
const router = jsonServer.router('db.json'); // Path to your JSON data file
const middlewares = jsonServer.defaults();

app.use('/api', router); // Proxy requests to /api to your JSON server
app.use(middlewares);

module.exports = app;
module.exports.handler = serverless(app);