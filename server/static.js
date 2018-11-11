const express = require('express');
const router = express.Router();

router.use(express.static('public', {
  index: 'main.html'
}));

module.exports = router;
