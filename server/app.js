const { join } = require('path');
require('dotenv').config();
const express = require('express');
const router = require('./routers');
const { clientError, errorHandler } = require('./middleware');

const app = express();
const { PORT } = process.env;

app.set('port', PORT || 3000);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(join(__dirname, '../client/dist')));

app.use('/api', router, clientError, errorHandler);

app.get('*', (req, res) => {
  res.sendFile(join(__dirname, '../client/dist/index.html'));
});

module.exports = app;
