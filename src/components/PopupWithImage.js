import Popup from './Popup.js'

export default class PopupWithImage extends Popup {
  constructor({ name, link }, popupSelector) {
    super(popupSelector)
    this._popup = document.querySelector(popupSelector)
    this._photo = this._popup.querySelector('.popup__photo')
    this._caption = this._popup.querySelector('.popup__caption')
    this._name = name
    this._link = link
  }

  open() {
    super.open()
    this._photo.src = this._link
    this._photo.alt = this._name
    this._caption.textContent = this._name
  }
}
