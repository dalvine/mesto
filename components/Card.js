export { Card }

class Card {
  constructor({ name, link }, templateElement, handleCardClick) {
    this._name = name;
    this._link = link;
    this._template = templateElement;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    return this._template.querySelector('.place').cloneNode(true)
  }

  _setEventListeners() {
    this._view.querySelector('.place__like').addEventListener('click', () => this._handleLike())
    this._view.querySelector('.place__photo').addEventListener('click', () => this._handleCardClick())
    this._view.querySelector('.place__delete').addEventListener('click', () => this._handleDelete())
  }

  _handleLike() {
    this._view.querySelector('.place__like').classList.toggle('place__like_active')
  }

  _handleDelete() {
    this._view.remove()
  }

  _fillCard() {
    const placePhoto = this._view.querySelector('.place__photo')
    placePhoto.src = this._link
    placePhoto.alt = this._name
    this._view.querySelector('.place__title').textContent = this._name
  }

  createCard() {
    this._view = this._getTemplate()
    this._fillCard(this._view)
    this._setEventListeners(this._view)
    return this._view
  }
}
