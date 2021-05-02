export default class Section {
  constructor({ renderer, containerSelector }) {
    this._renderer = renderer
    this._container = document.querySelector(containerSelector)
  }

  addItem(element) {
    this._container.prepend(element)
  }

  renderItems(array) {
    array.forEach(element => {
      this.addItem(this._renderer(element))
    });

  }
}
