const Photo = require('./photo');

class Photos {
  constructor(data) {
    this.collection = data.map(data => new Photo(data));
  };

  load() {
    return Promise.all(this.collection.map(this.loadPhoto));
  };

  loadPhoto(photo) {
    return photo.load().catch(reason => console.error(reason));
  };
};

module.exports = Photos;
