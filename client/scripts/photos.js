const Photo = require('./photo');

class Photos {
  constructor(data) {
    this.collection = data.map(data => new Photo(data));
  };

  load() {
    return Promise.all(this.collection.map(photo => photo.load()));
  };
};

module.exports = Photos;
