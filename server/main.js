#!/usr/bin/env node

require('dotenv').config();

const express = require('express');
const photos = require('./photos');

const app = express();
const port = process.env.PORT || 3000;

function listening() {
  process.stdout.write(`listening on port ${port}\n`);
};

app.use(express.static('public', {
  index: 'main.html'
}));

app.use(photos);

app.listen(port, listening);
