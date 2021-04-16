export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector)
    this._popupCloseBtn = this._popup.querySelector('.popup__close')
  }

  open() {
    this._popup.classList.add('popup_opened')
  }

  close() {
    this._popup.classList.remove('popup_opened')
  }

  _handleEscClose(evt) {
    const EscKey = 27
    if (evt.keyCode === EscKey) {
      this.close()
    }
  }

  setEventListeners() {
    this._popup.firstElementChild.addEventListener('mousedown', evt => evt.stopPropagation())
    this._popup.addEventListener('mousedown', () => this.close())
    document.addEventListener('keydown', (evt) => this._handleEscClose(evt))
    this._popupCloseBtn.addEventListener('click', this.close.bind(this))
  }
}


