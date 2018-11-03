const Photos = require('./photos');
const Presenter = require('./presenter');

function failure(reason) {
  console.error(reason);
};

async function main() {
  const response = await fetch('/photos');
  const data = await response.json();

  if (data.failure) {
    failure(data.payload);

    return;
  }

  window.photos = new Photos(data.payload.photoset.photo);

  await photos.load().catch(failure);

  window.presenter = new Presenter(photos.collection.filter(photo => photo.loaded));

  presenter.start({
    interval: 15000
  });
};

document.addEventListener('DOMContentLoaded', main);
