const express = require('express');
const Flickr = require('flickr-sdk');

const router = express.Router();

function index(request, response, next) {
  const flickr = new Flickr(process.env.FLICKER_KEY);

  flickr.photosets.getPhotos({
    photoset_id: process.env.FLICKER_ALBUM,
    user_id: process.env.FLICKER_USER
  }).then(data => response.success(data.body)).catch(response.failure);
};

function show(request, response, next) {
  const flickr = new Flickr(process.env.FLICKER_KEY);

  flickr.photos.getSizes({
    photo_id: request.params.id
  }).then(data => response.success(data.body)).catch(response.failure);
};

router.get('/photos', index);
router.get('/photos/:id', show);

module.exports = router;
