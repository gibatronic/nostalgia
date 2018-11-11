#!/usr/bin/env node

require('dotenv').config();

const express = require('express');
const helper = require('./helper');
const photos = require('./photos');
const static = require('./static');

const app = express();
const port = process.env.PORT || 3000;

app.use(static);
app.use(helper);
app.use(photos);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
