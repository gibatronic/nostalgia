class Photo {
  constructor(data) {
    this.data = data;
    this.element = undefined;
    this.loaded = false;
    this.sizes = [ ];
  };

  hide() {
    this.element.classList.add('photo--hidden');
  };

  load() {
    return new Promise(async (resolve, reject) => {
      const response = await fetch('/photos/' + this.data.id);
      const data = await response.json();

      this.sizes = data.payload.sizes.size;
      this.size = this.sizes.find(size => size.label === 'Large 1600');

      if (this.size === undefined) {
        this.size = this.sizes.find(size => size.label === 'Original');
      }

      if (this.size === undefined) {
        reject(`Photo #${this.data.id}: doesn't have required size.`);

        return;
      }

      this.element = document.createElement('img');

      this.element.addEventListener('error', event => reject(`Photo ${this.data.id}: ${event}`));
      this.element.addEventListener('load', () => { this.loaded = true; resolve(this) });

      this.element.src = this.size.source;
      this.element.classList.add('photo');
      this.hide();

      document.body.appendChild(this.element);
    });
  };

  show() {
    this.element.classList.remove('photo--hidden');
  };
};

module.exports = Photo;
