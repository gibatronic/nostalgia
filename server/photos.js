const express = require('express');
const Flickr = require('flickr-sdk');

const router = express.Router();

function index(request, response, next) {
  const flickr = new Flickr(process.env.FLICKER_KEY);

  function failure(reason) {
    response.json({
      failure: true,
      payload: reason,
      success: false
    });
  };

  function success(data) {
    response.json({
      failure: false,
      payload: data.body,
      success: true
    });
  };

  flickr.photosets.getPhotos({
    photoset_id: process.env.FLICKER_ALBUM,
    user_id: process.env.FLICKER_USER
  }).then(success).catch(failure);
};

function show(request, response, next) {
  const flickr = new Flickr(process.env.FLICKER_KEY);

  function failure(reason) {
    response.json({
      failure: true,
      payload: reason,
      success: false
    });
  };

  function success(data) {
    response.json({
      failure: false,
      payload: data.body,
      success: true
    });
  };

  flickr.photos.getSizes({
    photo_id: request.params.id
  }).then(success).catch(failure);
};

router.get('/photos', index);
router.get('/photos/:id', show);

module.exports = router;
