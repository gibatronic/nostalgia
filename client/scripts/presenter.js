class Presenter {
  constructor(photos) {
    this.photos = photos;
    this.currentIndex = 0;
    this.currentPhoto = this.photos[this.currentIndex];
    this.intervalId = undefined;
  };

  next() {
    this.currentPhoto.hide();
    this.currentIndex = ++this.currentIndex % this.photos.length
    this.currentPhoto = this.photos[this.currentIndex];
    this.currentPhoto.show();
  };

  start(options) {
    if (this.intervalId !== undefined) {
      this.stop();
    }

    options = Object.assign({
      interval: 1000
    }, options);

    this.currentPhoto.show();

    this.intervalId = setInterval(this.next.bind(this), options.interval);
  };

  stop() {
    if (this.intervalId === undefined) {
      return;
    }

    clearInterval(this.intervalId);
    this.intervalId = undefined;

    this.currentPhoto.hide();
  };
};

module.exports = Presenter;
