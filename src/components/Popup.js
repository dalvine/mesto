export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector)
    this._popupCloseBtn = this._popup.querySelector('.popup__close')
    this._handleEscCloseBind = this._handleEscClose.bind(this)
  }

  open() {
    this._popup.classList.add('popup_opened')
    document.addEventListener('keydown', this._handleEscCloseBind)
  }

  close() {
    this._popup.classList.remove('popup_opened')
    document.removeEventListener('keydown', this._handleEscCloseBind)
  }

  _handleEscClose(evt) {
    const EscKey = 27
    if (evt.keyCode === EscKey) {
      this.close()
    }
  }

  setEventListeners() {
    this._popup.firstElementChild.addEventListener('mousedown', evt => evt.stopPropagation())
    this._popup.addEventListener('mousedown', this.close.bind(this))
    this._popupCloseBtn.addEventListener('click', this.close.bind(this))
  }

}


