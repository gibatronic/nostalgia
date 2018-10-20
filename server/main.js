const express = require('express');
const app = express();
const port = 3000;

function listening() {
  console.log(`listening on port ${port}`);
};

app.use(express.static('public', {
  index: 'main.html'
}));

app.listen(port, listening);
