import Popup from './Popup.js'

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector)
    this._photo = this._popup.querySelector('.popup__photo')
    this._caption = this._popup.querySelector('.popup__caption')
  }

  open({name, link}) {
    this._photo.src = link
    this._photo.alt = name
    this._caption.textContent = name
    super.open()
  }
}
