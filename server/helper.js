const express = require('express');
const router = express.Router();

router.use((request, response, next) => {
  response.failure = function(reason) {
    response.json({
      failure: true,
      payload: reason,
      success: false
    });
  };

  response.success = function(data) {
    response.json({
      failure: false,
      payload: data,
      success: true
    });
  };

  next();
});

module.exports = router;
